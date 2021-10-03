import { SubscribeToChannel } from "zuricontrol";
// centrifugoCallBack is a callback function
const CentrifugeSetup = (channel, centrifugoCallBack) => {
    SubscribeToChannel(channel, centrifugoCallBack)
}
export default CentrifugeSetup;