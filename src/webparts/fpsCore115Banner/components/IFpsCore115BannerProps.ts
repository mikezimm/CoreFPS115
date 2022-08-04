import { IFPSCorePinMeReactComponentProps, IFPSCorePinMeReactComponentState } from '@mikezimm/npmfunctions/dist/CoreFPS/ReactComponentProps';


export interface IFpsCore115BannerProps  extends IFPSCorePinMeReactComponentProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
}


/**
 * Extends IFPSCorePinMeReactComponentState with all basics required for FPS Banner
 */
 export interface IFpsCore115BannerState extends IFPSCorePinMeReactComponentState {


}