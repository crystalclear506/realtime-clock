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
                "test": /\.s[ac]ss$/i,
                "use": [
                    "style-loader",
                    { 
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    }
};
