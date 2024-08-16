import AnimatePage from "../../Shared/AnimatePage";
function CareerDetails() {

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

                className="flex flex-col items-center justify-center w-full h-[60vh] bg-center bg-cover ">
                <div className="flex flex-col items-center justify-center flex-1 w-full mx-auto bg-page-cover">
                    <p className="w-5/6 text-3xl font-bold text-center text-white font-lora">
                        PAID INTERNSHIP AT RWANDA WOMEN DOCTORS FOR REPRODUCTIVE JUSTICE
                    </p>
                </div>
            </div>
            <section id="contactus" className="w-5/6 py-8 mx-auto">
                <p className="py-4 text-lg font-bold text-center text-gray-600">
                    CALL FOR APLLICATION: PAID INTERNSHIP AT RWANDA WOMEN DOCTORS
                    FOR REPRODUCTIVE JUSTICE
                </p>
                <p className="py-4 text-xl font-bold text-center text-gray-600">
                    INTRODUCTION
                </p>
                <div className="w-full ">
                    <p className='pb-3'>
                        <span className='font-bold pe-3'>Rwanda Women Doctors For Reproductive Justice (RWDFRJ)</span>
                        is a dedicated network of young
                        women physicians committed to advancing comprehensive healthcare services across Rwanda. Our
                        mission is to champion gender equity and uphold the rights of all individuals, ensuring that every
                        woman has the autonomy to make informed choices about her body. We envision a future where
                        every woman is not only protected and respected but also empowered to reach her fullest potential.
                    </p>

                    <p className='pb-3'>
                        To support our mission, we are thrilled to offer an internship opportunity for passionate individuals
                        eager to contribute to meaningful change. This role will allow you to engage with our initiatives,
                        support research, and work closely with a team committed to enhancing women's health and rights.
                    </p>

                    <p className='pb-3'>
                        <span className='font-bold pe-3'>Career Growth and Development:</span> At RWDFRJ, we foster a culture of continuous learning and
                        development. As an intern, you will benefit from weekly check-ins with your supervisor, access to
                        mentorship and training programs, and regular performance feedback. We conduct career reviews
                        every six months to align with your aspirations and professional goals. This is an opportunity to
                        contribute to a growing organization and build a fulfilling long-term career.
                    </p>

                    To learn more about our work, please visit our website for more detailed information:
                    https://womenrepro.org

                    <div className='py-3'>
                        <p className='py-1'>
                            <span className='font-bold '>Position:</span> Intern
                        </p>
                        <p className='py-1'>
                            <span className='font-bold '>Job location:</span> Kigali, Rwanda
                        </p>
                        <p className='py-1'>
                            <span className='font-bold '>Report:</span> Executive Director
                        </p>
                        <p className='py-1'>
                            <span className='font-bold '>Type:</span>Full Time
                        </p>
                    </div>
                    <div className='py-3'>
                        <p className='text-lg font-bold'>Responsibilities</p>
                        <ul className="pl-6 text-lg list-disc">
                            <li className='py-3'>
                                Providing administrative support such Scheduling meetings, preparing documents and
                                maintaining records.
                            </li>
                            <li className='py-3'>
                                Participate in trainings and professional development opportunities related to SRHR and
                                advocacy.
                            </li>
                            <li className='py-3'>
                                Assist in implementing, monitoring and evaluating the impact of SRHR Program and
                                Advocacy efforts.
                            </li>
                            <li className='py-3'>
                                Collaborate with organizational Staff to make a meaningful impact.
                            </li>
                        </ul>
                    </div>
                    <div className='py-3'>
                        <p className='text-lg font-bold'>Qualifications</p>
                        <ul className="pl-6 text-lg list-disc">
                            <li className='py-3'>
                                Fresh Graduates in any health-related field.
                            </li>
                            <li className='py-3'>
                                All Levels of experience are accepted.
                            </li>
                            <li className='py-3'>
                                Knowledge of sexual reproductive health along with an understanding of Rwanda
                                healthcare system.
                            </li>
                            <li className='py-3'>
                                Proficiency in Microsoft Office (Word, Excel, PowerPoint).
                            </li>
                            <li className='py-3'>
                                Excellent analytical, organizational, and communication skills.
                            </li>
                        </ul>
                    </div>
                    <div className='py-3'>
                        <p className='text-lg font-bold'>HOW TO APPLY</p>
                        <p className='py-1'>
                            Interested Applicant should submit <span className='px-2 font-bold'>a single PDF document</span> containing their Motivation
                            Letter, CV with 2 Referees, Academic Achievements (Degree Certificate) and relevant
                            Professional certificates (If any) to the following emails by the deadline.
                        </p>
                        <p className="my-2 font-bold text-center md:text-start">
                            womenreproductivejustice@gmail.com
                        </p>
                        <p className="my-2 font-bold text-center md:text-start">
                            eb@womenrepro.org
                        </p>
                    </div>
                    <p className='pt-4 text-lg font-bold'>Application Deadline: August 24th, 2024</p>
                    <div>
                        <p className='pt-3 text-lg font-bold'>Terms and Conditions:</p>
                        <p className='pt-3'>This internship opportunity offers a collaborative work environment, and opportunities
                            for professional development. The successful candidate will be expected to start on
                            September 02nd, 2024.
                            By applying, candidates agree to abide by the organization's employment terms and
                            conditions.
                        </p>
                        <p className='pt-6 text-lg font-bold'>
                            Note: Only shortlisted candidates will be contacted.
                        </p>
                        <p className="my-4">
                            Thank you for considering an internship with Rwanda Women Doctors For Reproductive Justice. We
                            look forward to receiving your application!
                        </p>
                        <button onClick={downloadDescription} className="flex gap-4 pt-4 font-bold underline ps-0 ">
                            Download Full Job Description
                        </button>
                    </div>
                </div>
            </section>
        </AnimatePage>
    );
}

export default CareerDetails;
