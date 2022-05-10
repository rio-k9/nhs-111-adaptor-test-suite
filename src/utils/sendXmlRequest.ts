import emergencyRequest from "../data/primary-emergency-itk-request.xml";

type Props = {};

const sendXmlRequest = () => {
  var xhr = new XMLHttpRequest();
  const stinrg = new XMLSerializer().serializeToString(emergencyRequest);
  console.log(stinrg);
};

export default sendXmlRequest;
