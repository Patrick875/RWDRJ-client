import AnimatePage from "../../Shared/AnimatePage";
import { contactusShema } from "../../Shared/types";
import useFetchData from "../../Hooks/UseFetchData";

function Career() {
    const { data: contactusContent } =
        useFetchData<contactusShema[]>("/contactus");
    const downloadDescription = () => {
        const link = document.createElement('a');
        link.href = "https://res.cloudinary.com/didikwl4i/image/upload/fl_attachment/v1723802043/RWDJ-IMAGES/Call_for_Application_cq7fkf.pdf";
        link.download = "Call Application";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <AnimatePage>
            <div
                style={{
                    backgroundImage:
                        contactusContent && contactusContent[0].coverImage
                            ? `url(${contactusContent[0].coverImage})`
                            : "",
                }}
                className="flex flex-col items-center justify-center w-full h-[60vh] bg-center bg-cover ">
                <div className="flex flex-col items-center justify-center flex-1 w-full mx-auto bg-page-cover">
                    <p className="w-5/6 text-3xl font-bold text-center text-white font-lora">
                        Empower Women. Advocate for Justice. Join Our Cause
                    </p>
                </div>
            </div>
            <section id="contactus" className="w-5/6 py-8 mx-auto">
                <p className="py-4 text-lg font-bold text-gray-600">Join Our Team</p>
                <div className="flex flex-col-reverse w-full md:flex-row">
                    <div className="w-full pr-8 ">
                        <p>
                            At Women Doctors for Reproductive Justice, we are committed to advocating for and advancing the rights of women to make informed decisions about their reproductive health.
                            Our organization is driven by a passionate team of healthcare professionals, advocates, and allies who are dedicated to ensuring that every woman has access to safe, respectful, and comprehensive reproductive healthcare.
                        </p>
                        <p className="py-4 font-bold text-gray-600">Why Work With Us?</p>
                        <ul className="pl-6 text-lg list-disc">
                            <li className='py-3'>
                                <span className='font-bold pe-3'> Impactful Work:</span>
                                Be part of a mission that empowers women and promotes justice in reproductive health.
                                Your work here directly contributes to making a difference in communities.
                            </li>
                            <li className='py-3'>
                                <span className='font-bold pe-3'>Supportive Community:</span>
                                We believe in uplifting one another.
                                Our team is built on a foundation of mutual respect, collaboration, and shared values.
                            </li>
                            <li className='py-3'>
                                <span className='font-bold pe-3'>Professional Growth:</span>
                                We offer opportunities for continuous learning and development.
                                Whether through training, workshops, or mentorship, we’re here to help you grow in your career.
                            </li>
                            <li className='py-3'>
                                <span className='font-bold pe-3'>Inclusive Environment:</span>
                                We are committed to creating a diverse and inclusive workplace where everyone’s voice is heard and valued.
                            </li>
                        </ul>
                        <p className="py-4 font-bold text-gray-600">Who We're Looking For</p>
                        <p>
                            We are looking for individuals who are passionate about reproductive justice and committed to advocating for women's rights.
                            If you have experience in healthcare, public health, advocacy, or related fields, and are eager to contribute to a meaningful cause, we encourage you to apply.
                        </p>
                        <p className="py-4 font-bold text-gray-600">Current Opportunities</p>
                        <div className='p-3 rounded-[8px] bg-[#e5e5e5] py-2  '>
                            <p className='font-bold'>
                                PAID INTERNSHIP (Full-Time) - Deadline August 24,2024
                            </p>
                            <p className='py-1'>
                                Type: Full Time
                            </p>
                            <p className='py-1'>
                                Job location: Kigali, Rwanda
                            </p>
                            <button onClick={downloadDescription} className="flex gap-4 font-bold underline ps-0 ">
                                Download Full Job Description
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatePage>
    );
}

export default Career;
