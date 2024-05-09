import { SparklesCore } from "./ui-prestyled-components/sparkles"

export default function Core(props){

    const height = props.height;
    const width = props.height;
    const density = props.density;
    const style = props.particleStyle

    return (
        <>
            <SparklesCore 
                particleStyle={style}
                height={height}
                width={width}
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={density}
                particleColor="#FFFFFF"
            />
            {/*<div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>*/}
        </>
    )
}