import GameHeader from './GameHeader';

export default {
  'With title & help': <GameHeader showHelp={true} showTitle={true}/>,
  'Menu only': <GameHeader showHelp={false} showTitle={false}/>
}