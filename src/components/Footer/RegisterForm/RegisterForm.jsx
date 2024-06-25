import { useState } from 'react';

const Input = function ({ invalid, ...props }) {
  //👉 Dynamic & Conditional Styling:
  let inputClasses =
    'grow shrink p-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rose-600 focus:ring-offset-0';

  if (invalid) {
    inputClasses += ' text-red-500 bg-red-100 border border-rose-600';
  } else {
    inputClasses += ' text-gray-600 bg-white';
  }

  return <input className={inputClasses} {...props} />;
};

export default function RegisterForm({ onAddUserFw, userList }) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  //eventHandlers
  const handleInputChange = value => {
    setEnteredEmail(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    if (emailNotValid) return;

    onAddUserFw(enteredEmail.toLowerCase().trim());
    alert(
      'Registered successfully! 🎉. Please go to Home page to get your accommodations.'
    );
    //clear inputs
    setEnteredEmail('');
    setSubmitted(false);
  };

  const isDup = userList.find(
    usrEmail => usrEmail === enteredEmail.toLowerCase().trim()
  );
  const emailNotValid = !enteredEmail.includes('@') || !enteredEmail || isDup;
  let warningMsg = <p className="hidden"></p>;

  if (submitted && isDup) {
    warningMsg = (
      <p className="block text-rose-600 mt-1.5">Username already exists!</p>
    );
  }

  return (
    <div
      id="register"
      className="grow flex flex-col items-center font-medium p-6 bg-navyBlue-300"
    >
      <div className="text-center text-white mt-6 space-y-5">
        <h1>Save time, save money!</h1>
        <p className="text-lg">Sign up and we'll send the best deals to you</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 mb-7">
        <div className="flex justify-center items-center min-w-[437px] space-x-3">
          {/* control */}
          <Input
            type="email"
            placeholder="Your Email"
            value={enteredEmail}
            invalid={submitted && emailNotValid}
            onChange={e => handleInputChange(e.target.value)}
          />
          {/* action */}
          <button className="primaryBtnRound grow-0 shrink px-2 py-4 hover:bg-navyBlue-100">
            Subscribe
          </button>
        </div>
        {warningMsg}
      </form>
    </div>
  );
}
