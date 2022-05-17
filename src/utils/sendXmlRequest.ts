import { AdaptorRequest } from "../types";
import reportXml from "../data/create-report-request.xml";
const beautify = require("xml-beautifier");

export type AdaptorResponse = {
  xml: string;
  status: number;
};

const sendXmlRequest = async (
  form: AdaptorRequest
): Promise<AdaptorResponse> => {
  const reportReq = await fetch(reportXml);
  const xml = await reportReq.text();
  return new Promise((res) => {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.requestHeaderFields.url, true);
    xhr.setRequestHeader(
      "Content-Type",
      form.requestHeaderFields["content-type"]
    );
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        res({
          xml: beautify(this.response),
          status: this.status,
        });
      }
    };
    xhr.send(xml);
  });
};

export default sendXmlRequest;
