import * as React from 'react';
import styles from './FpsCore115Banner.module.scss';
import { IFpsCore115BannerProps, IFpsCore115BannerState } from './IFpsCore115BannerProps';
import { escape } from '@microsoft/sp-lodash-subset';


import { saveViewAnalytics } from '../CoreFPS/Analytics';
import FetchBanner from '../CoreFPS/FetchBannerElement';

//Use this to add more console.logs for this component
const urlParams : URLSearchParams = new URLSearchParams( window.location.search );
const fpsconsole : boolean = urlParams.get( 'fpsconsole' ) === 'true' ? true : false;
const consolePrefix: string = 'fpsconsole: FpsCore115Banner';


export default class FpsCore115Banner extends React.Component<IFpsCore115BannerProps, IFpsCore115BannerState> {

  
  private _updatePinState( newValue ) {
    this.setState({ pinState: newValue, });
}

 /***
*     .o88b.  .d88b.  d8b   db .d8888. d888888b d8888b. db    db  .o88b. d888888b  .d88b.  d8888b. 
*    d8P  Y8 .8P  Y8. 888o  88 88'  YP `~~88~~' 88  `8D 88    88 d8P  Y8 `~~88~~' .8P  Y8. 88  `8D 
*    8P      88    88 88V8o 88 `8bo.      88    88oobY' 88    88 8P         88    88    88 88oobY' 
*    8b      88    88 88 V8o88   `Y8b.    88    88`8b   88    88 8b         88    88    88 88`8b   
*    Y8b  d8 `8b  d8' 88  V888 db   8D    88    88 `88. 88b  d88 Y8b  d8    88    `8b  d8' 88 `88. 
*     `Y88P'  `Y88P'  VP   V8P `8888Y'    YP    88   YD ~Y8888P'  `Y88P'    YP     `Y88P'  88   YD 
*                                                                                                  
*                                                                                                  
*/


  public constructor(props:IFpsCore115BannerProps){
    super(props);

    this.state = {
      pinState: this.props.fpsPinMenu.defPinState ? this.props.fpsPinMenu.defPinState : 'normal',
      showDevHeader: false,
      lastStateChange: '', 
      analyticsWasExecuted: false,

    };
  }

  public componentDidMount() {
    if ( fpsconsole === true ) console.log( `${consolePrefix} ~ componentDidMount` );

    let analyticsWasExecuted = saveViewAnalytics( 'FPS Core115 Banner View', 'didMount' , this.props, this.state.analyticsWasExecuted );

    if ( this.state.analyticsWasExecuted !==  analyticsWasExecuted ) {
      this.setState({ analyticsWasExecuted: analyticsWasExecuted });
    }

  }

  

//        
  /***
 *         d8888b. d888888b d8888b.      db    db d8888b. d8888b.  .d8b.  d888888b d88888b 
 *         88  `8D   `88'   88  `8D      88    88 88  `8D 88  `8D d8' `8b `~~88~~' 88'     
 *         88   88    88    88   88      88    88 88oodD' 88   88 88ooo88    88    88ooooo 
 *         88   88    88    88   88      88    88 88~~~   88   88 88~~~88    88    88~~~~~ 
 *         88  .8D   .88.   88  .8D      88b  d88 88      88  .8D 88   88    88    88.     
 *         Y8888D' Y888888P Y8888D'      ~Y8888P' 88      Y8888D' YP   YP    YP    Y88888P 
 *                                                                                         
 *                                                                                         
 */

public componentDidUpdate(prevProps){

  if ( fpsconsole === true ) console.log( `${consolePrefix} ~ componentDidUpdate` );
  // let pinStatus = getDefaultFPSPinState ( prevProps.fpsPinMenu, this.props.fpsPinMenu, this.props.displayMode );

  // if ( pinStatus.refresh === true ) {
  //   FPSPinMe( this.props.fpsPinMenu.domElement, pinStatus.defPinState, null,  false, true, null, this.props.fpsPinMenu.pageLayout, this.props.displayMode );
  //   this.setState({ pinState: pinStatus.defPinState });
  // }
  // this.setState({ pinState: this.state.pinState });
}

  public render(): React.ReactElement<IFpsCore115BannerProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    let devHeader = this.state.showDevHeader === true ? <div><b>Props: </b> { 'this.props.lastPropChange' + ', ' + 'this.props.lastPropDetailChange' } - <b>State: lastStateChange: </b> { this.state.lastStateChange  } </div> : null ;

    const Banner = <FetchBanner 
      parentProps={ this.props }
      parentState={ this.state }
      updatePinState = { this._updatePinState.bind(this) }
      pinState = { this.state.pinState }
    ></FetchBanner>;

    return (
      <section className={`${styles.fpsCore115Banner} ${hasTeamsContext ? styles.teams : ''}`}>
        { devHeader }
        { Banner }
        <div className={styles.welcome}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
        </div>
        <div>
          <h3>Welcome to SharePoint Framework!</h3>
          <p>
            The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It&#39;s the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling.
          </p>
          <h4>Learn more about SPFx development:</h4>
          <ul className={styles.links}>
            <li><a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">SharePoint Framework Overview</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-graph" target="_blank" rel="noreferrer">Use Microsoft Graph in your solution</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-teams" target="_blank" rel="noreferrer">Build for Microsoft Teams using SharePoint Framework</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-viva" target="_blank" rel="noreferrer">Build for Microsoft Viva Connections using SharePoint Framework</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-store" target="_blank" rel="noreferrer">Publish SharePoint Framework applications to the marketplace</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-api" target="_blank" rel="noreferrer">SharePoint Framework API reference</a></li>
            <li><a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">Microsoft 365 Developer Community</a></li>
          </ul>
        </div>
      </section>
    );
  }
}
