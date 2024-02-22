import Image from "next/image";

import infoImg from '../../public/infoImg.svg'

const InfoSection: React.FC<{}> = ({ }) => {
    return (
        <section className="flex flex-col items-center mt-28">
            <h2 className="font-bold mb-10 text-center info-title">Why choose us</h2>
            <div className="flex flex-row items-center justify-around w-full">
                <ul>
                    <li>Secruity</li>
                    <li>Customer service</li>
                </ul>
                <Image src={infoImg} alt={"Person running up bar chart"} width={500} height={500} />
            </div>
        </section>
    )
}

export default InfoSection;