module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": "3.36"
      }
    ],
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ],
  plugins: [
    "@babel/plugin-transform-runtime"
  ]
};
