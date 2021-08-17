const path = require("path");

const DEVELOPMENT = "development";
const PRODUCTION = "production";

module.exports = (env) => {
    var common = {
        output: {
            filename: "main.js",
            path: path.resolve(__dirname, "dist"),
        },
        resolve: {
            extensions: [".ts", ".js"]
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
                    test: /\.ts$/i,
                    use: ["ts-loader"],
                },
            ],
        },
    };

    var configurations = {};
    configurations[DEVELOPMENT] = {
        name: DEVELOPMENT,
        mode: DEVELOPMENT,
        devtool: "inline-source-map",
        watch: true,
        entry: [
            `./src/index.ts`,
        ],
    };
    configurations[PRODUCTION] = {
        name: PRODUCTION,
        mode: PRODUCTION,
        watch: false,
        entry: [
            `./src/index.ts`,
        ],
    };

    return { ...common, ...configurations[env.mode] };
};
