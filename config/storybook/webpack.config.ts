//@ts-ignore
import webpack from "webpack";
import {BuildPaths} from "../build/types/config";
//@ts-ignore
import path from "path";
import {buildCssLoader} from "../build/loaders/buildCssLoader";


export default ({config}: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, '..', '..', 'src'),
    }
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules = config.module.rules.map((rule: any) => {
        if (/svg/.test(rule.test)) {
            return {...rule, exclude: /\.svg$/i};
        }
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module.rules.push(buildCssLoader(true))
    return config;
}
