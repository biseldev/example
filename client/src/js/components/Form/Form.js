import React, { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState({
    name: '',
  });

  return (
    <form>
      <input
        type="text"
        value={form.name}
        onChange={() => {}}
      />
    </form>
  );
};

export default Form;
