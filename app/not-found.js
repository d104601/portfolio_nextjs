import Image from "next/image";

const Page404 = () => {
    return (
        <session className='notFound'>
            <div>
                <Image src="/images/404.png" alt="404" width={300} height={300} />
            </div>
        </session>
    );
};

export default Page404;