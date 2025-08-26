import React from 'react';

const AboutTemple = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="section-title">मंदिर के बारे में</h1>
            <div className="text-center mb-5">
              <p className="lead" style={{fontSize: '1.2rem', color: 'var(--primary)'}}>
                आस्था, एकता और परंपरा का प्रतीक
              </p>
            </div>
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-12">
            <div className="custom-card p-4">
              <h2 className="mb-4" style={{color: 'var(--secondary)'}}>मंदिर का परिचय</h2>
              <p className="lead">कैलाशपुर गाँव में स्थित यह नया मंदिर डॉ. टी.सी. राव और उनके परिवार की पहल से बना है।</p>
              <p>यह मंदिर प्राचीन शिव मंदिर के पास स्थित है और प्राचीनता तथा आधुनिकता के मेल का प्रतीक है। आठ देवताओं और आधुनिक सुविधाओं से सुसज्जित यह मंदिर अब एक महत्वपूर्ण आध्यात्मिक केंद्र बन गया है।</p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-6 mb-4">
            <div className="custom-card p-4 h-100">
              <h3 className="mb-3" style={{color: 'var(--secondary)'}}>मंदिर की संरचना</h3>
              <ul className="list-unstyled">
                <li className="mb-2"><strong>कुल भूमि क्षेत्र:</strong> 1000 वर्ग मीटर</li>
                <li className="mb-2"><strong>निर्मित क्षेत्र:</strong> 10,000 वर्ग फीट</li>
                <li className="mb-2"><strong>जल भंडारण:</strong> 15,000 लीटर भूमिगत टंकी</li>
                <li className="mb-2"><strong>विशेषताएं:</strong> CCTV, अनाउंसमेंट सिस्टम</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="custom-card p-4 h-100">
              <h3 className="mb-3" style={{color: 'var(--secondary)'}}>आवासीय सुविधाएं</h3>
              <ul className="list-unstyled">
                <li className="mb-2">• पुजारी परिवार के लिए दो बेडरूम सेट</li>
                <li className="mb-2">• स्थायी स्टाफ की व्यवस्था</li>
                <li className="mb-2">• तीर्थयात्रियों के लिए अलग शौचालय</li>
                <li className="mb-2">• बोरवेल और गाँव की जल आपूर्ति</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <div className="custom-card p-4">
              <h2 className="mb-4 text-center" style={{color: 'var(--secondary)'}}>मंदिर में स्थापित आठ देवी-देवता</h2>
              <div className="row">
                <div className="col-md-6 col-lg-3 mb-3">
                  <div className="deity-card p-3 text-center border rounded">
                    <h5 style={{color: 'var(--primary)'}}>श्री राम दरबार</h5>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-3">
                  <div className="deity-card p-3 text-center border rounded">
                    <h5 style={{color: 'var(--primary)'}}>माता दुर्गा</h5>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-3">
                  <div className="deity-card p-3 text-center border rounded">
                    <h5 style={{color: 'var(--primary)'}}>राधा कृष्ण दरबार</h5>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-3">
                  <div className="deity-card p-3 text-center border rounded">
                    <h5 style={{color: 'var(--primary)'}}>श्री गणेश जी</h5>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-3">
                  <div className="deity-card p-3 text-center border rounded">
                    <h5 style={{color: 'var(--primary)'}}>बाबा मुक्तेश्वरी महाराज</h5>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-3">
                  <div className="deity-card p-3 text-center border rounded">
                    <h5 style={{color: 'var(--primary)'}}>श्री शनि देवता</h5>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-3">
                  <div className="deity-card p-3 text-center border rounded">
                    <h5 style={{color: 'var(--primary)'}}>श्री भैरव बाबा</h5>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-3">
                  <div className="deity-card p-3 text-center border rounded">
                    <h5 style={{color: 'var(--primary)'}}>श्री नवग्रह</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <div className="custom-card p-4">
              <h2 className="mb-4" style={{color: 'var(--secondary)'}}>कलात्मक उत्कृष्टता</h2>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <p><strong>मूर्तियां:</strong> जयपुर के प्रसिद्ध मूर्तिकार द्वारा निर्मित</p>
                  <p><strong>सामग्री:</strong> सुपर व्हाइट पत्थर (वियतनाम से आयातित)</p>
                </div>
                <div className="col-md-6 mb-3">
                  <p><strong>GRC कार्य:</strong> दिल्ली GRC द्वारा</p>
                  <p><strong>गुम्बज:</strong> उमेद मिस्त्री की टीम द्वारा निर्मित</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <div className="custom-card p-4">
              <h2 className="mb-4" style={{color: 'var(--secondary)'}}>प्रमुख योगदानकर्ता</h2>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <h5 style={{color: 'var(--primary)'}}>वास्तुकार व विशेषज्ञ</h5>
                  <ul className="list-unstyled">
                    <li>• श्री धरमबीर (वास्तुकार)</li>
                    <li>• श्री संजीव शर्मा (वास्तु विशेषज्ञ)</li>
                  </ul>
                </div>
                <div className="col-md-4 mb-3">
                  <h5 style={{color: 'var(--primary)'}}>निर्माण कार्य</h5>
                  <ul className="list-unstyled">
                    <li>• श्री सूरजमल ठेकेदार (सिविल कार्य)</li>
                    <li>• श्री रामकिशन (पत्थर का काम)</li>
                    <li>• श्री संदीप (विद्युत व प्लंबिंग)</li>
                  </ul>
                </div>
                <div className="col-md-4 mb-3">
                  <h5 style={{color: 'var(--primary)'}}>सामुदायिक सहयोग</h5>
                  <ul className="list-unstyled">
                    <li>• श्री मनोज यादव</li>
                    <li>• श्री राजपाल यादव</li>
                    <li>• श्री अमित यादव</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <div className="custom-card p-4">
              <h2 className="mb-4" style={{color: 'var(--secondary)'}}>आध्यात्मिक और सांस्कृतिक महत्व</h2>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <h5 style={{color: 'var(--primary)'}}>धार्मिक गतिविधियां</h5>
                  <p>नियमित सत्संग, कीर्तन और भजन का आयोजन। वार्षिक मेले, यज्ञ और प्रमुख त्योहारों का उत्सव।</p>
                </div>
                <div className="col-md-6 mb-3">
                  <h5 style={{color: 'var(--primary)'}}>सामुदायिक सेवा</h5>
                  <p>भंडारा और सेवा कार्य। आध्यात्मिक पुस्तकों की लाइब्रेरी की स्थापना।</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="custom-card p-4 text-center" style={{background: 'linear-gradient(135deg, var(--cream), #fff)'}}>
              <h2 className="mb-4" style={{color: 'var(--secondary)'}}>एकता और आस्था का प्रतीक</h2>
              <p className="lead">यह मंदिर केवल एक धार्मिक स्थल नहीं है, बल्कि सामाजिक एकता का प्रतीक भी है।</p>
              <p>गाँव के सभी वर्गों के सहयोग से बना यह मंदिर आपसी भाईचारे और सामूहिक भावना को दर्शाता है। यहाँ श्रद्धालु शांति और आध्यात्मिक ऊर्जा प्राप्त कर सकते हैं।</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTemple;