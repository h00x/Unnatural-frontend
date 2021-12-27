import ButtonSimple from "./button-simple";
import Button from "./button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function GetInTouch({ data }) {
    return (
        <>
            <h2 className="md:text-8xl text-6xl font-bold text-center mb-16 md:w-128 w-full px-8">{ data.service_contact_title }</h2>
            <div className="flex items-start justify-center flex-col md:flex-row w-full xl:w-2/3 px-4 md:px-8">
                <div className="max-w-3xl md:w-1/2 bg-pink-500 dark:bg-pink-800 rounded-2xl p-8 md:p-14">
                    <h3 className="text-3xl mb-4">{ data.service_title }</h3>
                    <p className="pb-8 mb-8 border-b-2 border-pink-600 dark:border-pink-900">{ data.service_text }</p>
                    <div className="text-right">
                        <ButtonSimple href="/about">{ data.service_link_text }</ButtonSimple>
                    </div>
                </div>
                <div className="max-w-3xl md:w-1/2 md:pl-14 pt-16 md:pt-32 px-4">
                    <h4 className="mb-4">{ data.contact_subtitle }</h4>
                    <h3 className="text-3xl mb-4 w-64">{ data.contact_title }</h3>
                    <p className="mb-8">{ data.contact_text }</p>
                    <Button href={ data.contact_button_url } icon={<FontAwesomeIcon icon={faEnvelope} />}>{ data.contact_button_text }</Button>
                </div>
            </div>
        </>
    )
}
