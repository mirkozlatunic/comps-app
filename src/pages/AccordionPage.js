import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "efwdvssf",
      label: "Can I use some React on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "dsvsd",
      label: "Can I use some Javascript on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "gnkhn",
      label: "Can I use some CSS on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
  ];
  return <Accordion items={items} />;
};

export default AccordionPage;
