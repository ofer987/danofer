const path = require("path");

module.exports = {
    mode: "development",
    entry: [
        "./src/index.js",
    ],
    watch: true,
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: [/\.css$/i, /\.scss$/i],
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ],
            },
            {
                test: /\.html$/i,
                type: "asset/resource",
                generator: {
                    filename: "foobar" 
                },
            },
        ]
    }
};
