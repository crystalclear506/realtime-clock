const path = require("path");

module.exports = {
    "mode": "development",
    "entry": [
        "./src/Components/realtime-clock.js",
    ],
    "output": {
        "filename": "realtime-clock.js",
        "library": "@crystalclear506/realtime-clock",
        "libraryTarget": "umd"
    },
    "module": {
        "rules": [
            {
                "test": /\.m?js$/,
                "exclude": /(node_modules|bower_components)/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": ["@babel/preset-react"]
                    }
                }
            },
            {
                "test": /\.css$/i,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
};
