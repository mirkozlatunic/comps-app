import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus
        felis vel nunc tempor rhoncus. Pellentesque metus mauris, placerat non
        eleifend sed, molestie at quam. Proin libero nulla, ultrices eu pharetra
        vel, sodales vitae tortor. Phasellus mattis turpis id arcu mattis
        posuere. Vestibulum egestas aliquam magna, non interdum massa
        scelerisque in. Nunc enim augue, tincidunt id arcu a, aliquet
        sollicitudin nibh. Integer velit enim, porttitor ullamcorper dignissim
        quis, vehicula vel lacus. Morbi fermentum congue mi a posuere. Cras
        blandit urna dui, at pretium enim elementum ut. Pellentesque et molestie
        orci. Quisque mattis, dui non rhoncus porttitor, purus mauris lacinia
        massa, id blandit enim est a ante. Aenean eu nunc orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus
        felis vel nunc tempor rhoncus. Pellentesque metus mauris, placerat non
        eleifend sed, molestie at quam. Proin libero nulla, ultrices eu pharetra
        vel, sodales vitae tortor. Phasellus mattis turpis id arcu mattis
        posuere. Vestibulum egestas aliquam magna, non interdum massa
        scelerisque in. Nunc enim augue, tincidunt id arcu a, aliquet
        sollicitudin nibh. Integer velit enim, porttitor ullamcorper dignissim
        quis, vehicula vel lacus. Morbi fermentum congue mi a posuere. Cras
        blandit urna dui, at pretium enim elementum ut. Pellentesque et molestie
        orci. Quisque mattis, dui non rhoncus porttitor, purus mauris lacinia
        massa, id blandit enim est a ante. Aenean eu nunc orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus
        felis vel nunc tempor rhoncus. Pellentesque metus mauris, placerat non
        eleifend sed, molestie at quam. Proin libero nulla, ultrices eu pharetra
        vel, sodales vitae tortor. Phasellus mattis turpis id arcu mattis
        posuere. Vestibulum egestas aliquam magna, non interdum massa
        scelerisque in. Nunc enim augue, tincidunt id arcu a, aliquet
        sollicitudin nibh. Integer velit enim, porttitor ullamcorper dignissim
        quis, vehicula vel lacus. Morbi fermentum congue mi a posuere. Cras
        blandit urna dui, at pretium enim elementum ut. Pellentesque et molestie
        orci. Quisque mattis, dui non rhoncus porttitor, purus mauris lacinia
        massa, id blandit enim est a ante. Aenean eu nunc orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus
        felis vel nunc tempor rhoncus. Pellentesque metus mauris, placerat non
        eleifend sed, molestie at quam. Proin libero nulla, ultrices eu pharetra
        vel, sodales vitae tortor. Phasellus mattis turpis id arcu mattis
        posuere. Vestibulum egestas aliquam magna, non interdum massa
        scelerisque in. Nunc enim augue, tincidunt id arcu a, aliquet
        sollicitudin nibh. Integer velit enim, porttitor ullamcorper dignissim
        quis, vehicula vel lacus. Morbi fermentum congue mi a posuere. Cras
        blandit urna dui, at pretium enim elementum ut. Pellentesque et molestie
        orci. Quisque mattis, dui non rhoncus porttitor, purus mauris lacinia
        massa, id blandit enim est a ante. Aenean eu nunc orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus
        felis vel nunc tempor rhoncus. Pellentesque metus mauris, placerat non
        eleifend sed, molestie at quam. Proin libero nulla, ultrices eu pharetra
        vel, sodales vitae tortor. Phasellus mattis turpis id arcu mattis
        posuere. Vestibulum egestas aliquam magna, non interdum massa
        scelerisque in. Nunc enim augue, tincidunt id arcu a, aliquet
        sollicitudin nibh. Integer velit enim, porttitor ullamcorper dignissim
        quis, vehicula vel lacus. Morbi fermentum congue mi a posuere. Cras
        blandit urna dui, at pretium enim elementum ut. Pellentesque et molestie
        orci. Quisque mattis, dui non rhoncus porttitor, purus mauris lacinia
        massa, id blandit enim est a ante. Aenean eu nunc orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus
        felis vel nunc tempor rhoncus. Pellentesque metus mauris, placerat non
        eleifend sed, molestie at quam. Proin libero nulla, ultrices eu pharetra
        vel, sodales vitae tortor. Phasellus mattis turpis id arcu mattis
        posuere. Vestibulum egestas aliquam magna, non interdum massa
        scelerisque in. Nunc enim augue, tincidunt id arcu a, aliquet
        sollicitudin nibh. Integer velit enim, porttitor ullamcorper dignissim
        quis, vehicula vel lacus. Morbi fermentum congue mi a posuere. Cras
        blandit urna dui, at pretium enim elementum ut. Pellentesque et molestie
        orci. Quisque mattis, dui non rhoncus porttitor, purus mauris lacinia
        massa, id blandit enim est a ante. Aenean eu nunc orci.
      </p>
    </div>
  );
}

export default ModalPage;
