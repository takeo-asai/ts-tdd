import * as webpack from "webpack";
import * as path from "path";

const config: webpack.Configuration = {
    devtool: "inline-source-map",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: "ts-loader",
            },
            {
                enforce: "pre",
                exclude: /node_modules/,
                test: /\.tsx?$/,
                loader: "tslint-loader",
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};

export default config;
