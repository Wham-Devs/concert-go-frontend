import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const ConcertGoFAQ = () => {
  const faqs = [
    {
      id: 2,
      question: "",
      answer: "",
    },
    {
      id: 4,
      question: "Are outside food and drinks allowed at the concert?",
      answer:
        "Outside food and drinks are generally not allowed at the concert venue. However, there may be food and beverage vendors inside the venue.",
    },
    {
      id: 5,
      question: "Can I bring my camera to the concert?",
      answer:
        "Professional cameras and recording equipment are usually not allowed. However, small personal cameras and smartphones are often permitted for non-commercial use.",
    },
    {
      id: 6,
      question: "What happens if it rains on the day of the concert?",
      answer:
        "In the case of rain, the concert may be moved to an indoor venue or postponed to a later date. Updates and announcements will be made on our website and social media channels.",
    },
    {
      id: 7,
      question: "Are tickets refundable or exchangeable?",
      answer:
        "Tickets are typically non-refundable and non-exchangeable, unless there are exceptional circumstances. Please refer to the ticketing terms and conditions for more information.",
    },
    {
      id: 8,
      question: "Can I bring my kids to the concert?",
      answer:
        "The age restrictions for the concert may vary. Please check the event details on our website or contact our customer support for specific information regarding age restrictions.",
    },
    {
      id: 9,
      question: "Is there a dress code for the concert?",
      answer:
        "There is usually no specific dress code for concerts, but it's recommended to dress comfortably and appropriately for the event.",
    },
    {
      id: 10,
      question: "How can I contact customer support for further assistance?",
      answer:
        "You can reach our customer support team by [contact information], and they will be happy to assist you with any questions or concerns.",
    },
  ];

  return (
    <div className="h-screen w-screen">
      <div className="bg-black grid grid-cols-3 gap-8 h-screen w-screen">
        <h1 className="text-red-500 font-anton text-9xl w-screen pt-4 bg-black p-0">
          FAQs
        </h1>
        <br />
        <br />
        <br />

        {faqs.map(({ id, question, answer }) => {
          return (
            <div key={id}>
              <Card className="bg-transparent z-10">
                <CardBody
                  // className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
                  key={id}
                >
                  <CardTitle className="text-red-500 text-xl italic" tag="h5">
                    {question}
                  </CardTitle>
                  <CardSubtitle className="text-white" tag="h6">
                    {answer}
                  </CardSubtitle>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConcertGoFAQ;
