var React = require('react-native');
var formatTime = require('minutes-seconds-milliseconds')
var {
  Text,
  View,
  TouchableHighlight,
  AppRegistry,
  StyleSheet,
} = React;

var StopWatch = React.createClass({
  // 初期化、pythonのコンストラクタみたいな
  // これがinitial state
  getInitialState: function(){
    return {
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: []
    }
  },
  render: function(){
    return <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.timerWrapper}>
          <Text style={styles.timer}>
            {formatTime(this.state.timeElapsed)}
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={styles.footer}>
      {this.laps()}
      </View>
    </View>
  },
  laps: function(){
    return this.state.laps.map(function(time, index){
      return <View style={styles.lap}>
        <Text style={styles.lapText}>
          Lap #{index + 1}
        </Text>
        <Text style={styles.lapText}>
          {formatTime(time)}
        </Text>
      </View>
    });
  },
  startStopButton: function(){
    var style = this.state.running ? styles.stopButton : styles.startButton;

    return <TouchableHighlight 
    onPress={this.handleStartPress} 
    underlayColor='gray'
    style={[styles.button, style]}
    >
      <Text>
        {this.state.running ? 'Stop' : 'Start'}
      </Text>
    </TouchableHighlight>
  },
  lapButton: function(){
    return <TouchableHighlight 
    style={styles.button}
    underlayColor='gray' 
    onPress={this.handleLapPress}
    >
      <Text>
        Lap
      </Text>
    </TouchableHighlight>
  },
  handleLapPress: function(){
    var lap = this.state.timeElapsed;

    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap])
    });
  },
  handleStartPress: function(){
    if(this.state.running) {
      clearInterval(this.interval);
      this.setState({running: false});
      return
    }

    this.setState({startTime: new Date()})

    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    }, 30);
  },
});

var styles = StyleSheet.create({
  // styleのメインシートは全部縦方向につながっていく
  container: {
    flex: 1, // fill the entire the screen
    alignItems: 'stretch'
  },
  header: { // Yellow
    flex: 1,
  },
  footer: { // Blue
    flex: 1,
  },
  timerWrapper: { // red
    flex: 5, // takes up 5/8ths of the available space
    justifyContent: 'center', // vertical
    alignItems: 'center', // holizontal
  },
  buttonWrapper: { // green
    flex: 3, // takes up 5/10ths of the available space
    flexDirection: 'row', //横方向に　align, justifyは逆に
    justifyContent: 'space-around', // vertical
    alignItems: 'center', // holizontal
  },
  timer: { // put start button nicely
    fontSize: 60
  },
  button: { // 
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lapText: {
    fontSize: 30
  }
});

// show the react comonent on the screen
AppRegistry.registerComponent('stopwatch', () => StopWatch)