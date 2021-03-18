// Initialize the DeepAR object
var deepAR = DeepAR({
  licenseKey: "your license key goes here",
  canvasWidth: window.innerWidth,
  canvasHeight: window.innerHeight,
  canvas: document.getElementById("deepar-canvas"),
  numberOfFaces: 1, // how many faces we want to track min 1, max 4
  onInitialize: function () {
    console.log("初期化実行");
    // start video immediately after the initalization, mirror = true
    deepAR.startVideo(true);
    // load the aviators effect on the first face into slot 'slot'
    deepAR.switchEffect(0, "slot", "./effect/aviators", function () {
      // deepAR.switchEffect(0, "slot", "./aviators", function () {
      // effect loaded
    });
  },
});

let switchEffect;

//ボタンを押したら走る処理
const changeEffect = () => {
  //ボタンが押されたかどうかの確認
  console.log("ボタンが押されました");
  //表示する顔の数,エフェクトの名前,エフェクトへのファイルパス,関数(今回はなし)
  deepAR.switchEffect(0, "beard", "./effect/beard", {});
};

// download the face tracking model
deepAR.downloadFaceTrackingModel("models/models-68-extreme.bin");
