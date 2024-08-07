import { DecisionMap } from "../types/evolve.types";

export const getMessageContent = (status: string) => {
    const messageContent = {
        approved: {
            heading: 'Congratulations! Your application has been approved.',
            body: [
                'Thank you for your interest in our products and services. We are pleased to inform you that your application has been reviewed and approved. Our team will reach out to you shortly with the next steps and any additional information you may need.',
                'We look forward to serving you and providing you with the best possible experience.',
            ],
        },
        declined: {
            heading: 'Application Declined',
            body: [
                'Thank you for your interest in our products and services. Unfortunately, after careful review, we are unable to approve your application at this time. Our decision is based on various factors, including credit history, income, and other criteria.',
                'We understand that this may be disappointing news. If your circumstances change in the future, we encourage you to reapply, and we will be happy to review your application again.',
            ],
        },
        refer: {
            heading: 'Additional Information Required',
            body: [
                'Thank you for your interest in our products and services. After reviewing your application, we require some additional information to make a final decision.',
                'One of our representatives will be in touch with you shortly to discuss the next steps and gather the necessary information. We appreciate your patience and cooperation during this process.',
            ],
        },
    } as DecisionMap;

    return messageContent[status] || null;
};