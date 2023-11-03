const detectIOSSafari = () => {
  const ua = window.navigator.userAgent;
  const iOS = /iPhone|iPad|iPod/i.test(ua);
  const webkit = /WebKit/i.test(ua);
  const iOSChrome = /CriOS/i.test(ua);
  const kakao = /kakaotalk/i.test(ua);
  const iOSSafari = iOS && webkit && !iOSChrome && !kakao;

  return iOSSafari;
};

export default detectIOSSafari;
