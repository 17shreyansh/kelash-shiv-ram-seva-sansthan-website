import React from 'react';

const Temple = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="section-title">कैलाशपुर के बारे में</h1>
            <div className="text-center mb-5">
              <p className="lead" style={{fontSize: '1.2rem', color: 'var(--primary)'}}>
                एक गौरवशाली गाँव की कहानी
              </p>
            </div>
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-12">
            <div className="custom-card p-4">
              <h2 className="mb-4" style={{color: 'var(--secondary)'}}>गाँव का परिचय</h2>
              <p className="lead">कैलाशपुर गाँव दिल्ली से 86 किलोमीटर और रेवाड़ी से 22 किलोमीटर दूर स्थित है।</p>
              <p>करीब 200 साल पहले तीन परिवार कोसली गाँव से यहाँ आकर बसे, जो सभी कोसलिया गोत्र के थे। आज कैलाशपुर में लगभग 101 परिवार रहते हैं और जनसंख्या 500 से अधिक हो चुकी है।</p>
              <p>इस छोटे से गाँव की पहचान मुख्य रूप से सेना में सेवा देने के लिए रही है। लगभग हर घर से कोई न कोई सदस्य भारतीय सेना, अर्धसैनिक बलों या पुलिस बल में जरूर रहा है।</p>
            </div>
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-12">
            <div className="custom-card p-4">
              <h2 className="mb-4" style={{color: 'var(--secondary)'}}>गौरवशाली सैन्य इतिहास</h2>
              <p className="lead">कैलाशपुर गाँव ने भारतीय सेना और सुरक्षा बलों में महत्वपूर्ण योगदान दिया है।</p>
              <p>1965 और 1971 के भारत-पाक युद्धों में गाँव के 22 में से 21 सैनिकों ने भाग लिया। यह गाँव भारत के उन चुनिंदा गाँवों में से है, जिसने हर पीढ़ी में देश की रक्षा के लिए जवान दिए हैं।</p>
              <p>गाँव के लोगों में देशभक्ति, अनुशासन और कर्तव्यनिष्ठा कूट-कूट कर भरी हुई है। गाँव के युवा आज भी सेना, अर्धसैनिक बलों और पुलिस में भर्ती होकर भारत की सेवा कर रहे हैं।</p>
            </div>
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-12">
            <div className="custom-card p-5">
              <h2 className="mb-4 text-center" style={{color: 'var(--secondary)'}}>शिक्षा और उपलब्धियाँ</h2>
              <p className="lead text-center mb-4">
                गाँव न केवल सैन्य सेवा में अग्रणी रहा है, बल्कि शिक्षा के क्षेत्र में भी लगातार प्रगति कर रहा है।
              </p>
              <p className="text-center">यहाँ के कई युवा अधिकारी, इंजीनियर, डॉक्टर, प्रोफेसर बन चुके हैं। गाँव ने अब तक चार सेना अधिकारी, 100 से अधिक स्नातक और अनेक सरकारी कर्मचारी दिए हैं।</p>
              <p className="text-center">इस प्रगति को और तेज़ करने के लिए हमें अपने गाँव में और अच्छे स्कूल, डिजिटल शिक्षा और पुस्तकालय की आवश्यकता है।</p>
            </div>
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-12">
            <div className="custom-card p-4">
              <h2 className="mb-4" style={{color: 'var(--secondary)'}}>गाँव के जीवन के लाभ</h2>
              <p className="lead mb-4">गाँव का जीवन कई मायनों में शहरों से बेहतर है। गाँव से प्रमुख बातें इस प्रकार हैं:</p>
              
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="benefit-item p-3 border-start border-4" style={{borderColor: 'var(--primary) !important'}}>
                    <h5 style={{color: 'var(--secondary)'}}>सामुदायिक सहयोग और सामाजिक संबंध</h5>
                    <p>गाँव में सभी लोग एक-दूसरे की मदद करते हैं और मिलकर काम करते हैं। शादी, खेती, त्यौहार और संकट के समय संपूर्ण गाँव एक परिवार की तरह खड़ा रहता है।</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="benefit-item p-3 border-start border-4" style={{borderColor: 'var(--primary) !important'}}>
                    <h5 style={{color: 'var(--secondary)'}}>आत्मनिर्भरता और संसाधनों का सदुपयोग</h5>
                    <p>गाँव में सीमित संसाधन होने के बावजूद सभी लोगों ने आत्मनिर्भर रहना सीखा। खेती, पशुपालन, घरेलू निर्माण और परंपरागत हुनर निवासियों को जीवन में स्वावलंबी बनाते हैं।</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="benefit-item p-3 border-start border-4" style={{borderColor: 'var(--primary) !important'}}>
                    <h5 style={{color: 'var(--secondary)'}}>प्रकृति से जुड़ाव और पर्यावरण का महत्व</h5>
                    <p>गाँव की खुली हवा, हरे-भरे खेत, तालाब और पेड़-पौधे निवासियों को पर्यावरण के प्रति संवेदनशील बनाते हैं। प्रकृति से यह सीधा संबंध शारीरिक और मानसिक स्वास्थ्य के लिए बहुत लाभदायक होता है।</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="benefit-item p-3 border-start border-4" style={{borderColor: 'var(--primary) !important'}}>
                    <h5 style={{color: 'var(--secondary)'}}>परंपराएं और संस्कार</h5>
                    <p>गाँव में संस्कृति और परंपराएं पीढ़ी दर पीढ़ी चलती आ रही हैं। बड़ों का सम्मान, एकता, परिश्रम और ईमानदारी यहाँ के संस्कारों में शामिल हैं।</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="custom-card p-4 text-center" style={{background: 'linear-gradient(135deg, var(--cream), #fff)'}}>
              <h2 className="mb-4" style={{color: 'var(--secondary)'}}>चुनौतियाँ और संघर्ष से लड़ने की क्षमता</h2>
              <p className="lead">गाँव में कई सुविधाओं की कमी होती है, लेकिन इससे गांववासियों को संघर्ष करने और मुश्किलों से लड़ने की ताकत मिलती है।</p>
              <p>यही कारण है कि गाँवों से निकले लोग सेना, प्रशासन, खेल और विज्ञान जैसे क्षेत्रों में आगे बढ़ते हैं।</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temple;