import Image from "next/image";
const PosterImage = ({title,poster_path,classes}) => {
    // console.log(poster_path)
return <Image alt={title} width={100} height={100} src={poster_path} className={classes} />;
};

export default PosterImage;
