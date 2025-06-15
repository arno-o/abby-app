import NavBar from "~/components/NavBar";
import BlobsContainer from "~/components/BlobsContainer";

const Live = () => {
    return (
        <>
            <div className="">
                <BlobsContainer count={8} />
            </div>

            <NavBar />
        </>
    );
}

export default Live;