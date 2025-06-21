import React, { useState, ChangeEvent, FormEvent } from 'react';
import NormalButton from './NormalButton';
// import { useParams } from 'react-router-dom';
// import { dataCard } from '../data/cardData';

interface FormDataType {
  q1: string[];
  q2: string;
  q3: string[];
  q4: string[];
  q5: string;
  q6: string[];
  q7: string[];
  q8: string;
  q9: string[];
  q10: string[];
  q11: string;
  q12: string[];
  q13: string;
  q14: string;
  q15: string;
  q16: string[];
  q17: string;
}

const defaultFormData: FormDataType = {
  q1: [],
  q2: '',
  q3: [],
  q4: [],
  q5: '',
  q6: [],
  q7: [],
  q8: '',
  q9: [],
  q10: [],
  q11: '',
  q12: [],
  q13: '',
  q14: '',
  q15: '',
  q16: [],
  q17: ''
};



const FormSurvey: React.FC = () => {

    const [formData, setFormData] = useState<FormDataType>(defaultFormData);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // const { slug } = useParams<{ slug: string }>();
    // const form = dataCard.find((item) => item.slug === slug);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const [question, option] = name.split('-');
      setFormData((prev) => {
        const current = prev[question as keyof FormDataType] as string[];
        return {
          ...prev,
          [question]: checked ? [...current, option] : current.filter((v) => v !== option)
        };
      });
    } else if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div className="my-10 mx-auto md:px-12 ">
      <form onSubmit={handleSubmit} className="space-y-6 pf">
        <div>
          <label className="block font-semibold mb-1">1. Which of these best describe you?</label>
          <div className="flex flex-col gap-3 mt-3">
            {['A', 'B', 'C', 'D'].map((opt, idx) => (
              <label key={opt} className="inline-flex font-light items-center">
                <input
                  type="checkbox"
                  name={`q1-${opt}`}
                  checked={formData.q1.includes(opt)}
                  onChange={handleChange}
                  className="mr-1"
                />
                {['Student', 'Professional', 'Freelancer', 'Entrepreneur'][idx]}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">2. What is your current city?</label>
          <input
            name="q2"
            value={formData.q2}
            onChange={handleChange}
            className="w-full border-0 border-b ring-0 outline-0  px-4 py-2"
            type="text"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">3. Would you consider relocating?</label>
          <div className="flex flex-col gap-3 mt-3">
            {['Yes', 'No'].map((opt) => (
              <label key={opt} className="inline-flex font-light items-center">
                <input
                  type="checkbox"
                  name={`q3-${opt}`}
                  checked={formData.q3.includes(opt)}
                  onChange={handleChange}
                  className="mr-1"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">4. What are your preferred work environments?</label>
          <div className="flex flex-col gap-3 mt-3">
            {['A', 'B', 'C', 'D'].map((opt, idx) => (
              <label key={opt} className="inline-flex font-light items-center">
                <input
                  type="checkbox"
                  name={`q4-${opt}`}
                  checked={formData.q4.includes(opt)}
                  onChange={handleChange}
                  className="mr-1"
                />
                {['Office', 'Remote', 'Hybrid', 'Flexible'][idx]}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">5. Describe your dream job</label>
          <input
            name="q5"
            value={formData.q5}
            onChange={handleChange}
            className="w-full border-0 border-b ring-0 outline-0 px-4 py-2"
            type="text"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">6. Are you open to internships?</label>
          <div className="flex flex-col gap-3 mt-3">
            {['Yes', 'No'].map((opt) => (
              <label key={opt} className="inline-flex font-light items-center">
                <input
                  type="checkbox"
                  name={`q6-${opt}`}
                  checked={formData.q6.includes(opt)}
                  onChange={handleChange}
                  className="mr-1"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">7. Preferred communication methods</label>
          <div className="flex flex-col gap-3 mt-3">
            {['A', 'B', 'C', 'D'].map((opt, idx) => (
              <label key={opt} className="inline-flex font-light items-center">
                <input
                  type="checkbox"
                  name={`q7-${opt}`}
                  checked={formData.q7.includes(opt)}
                  onChange={handleChange}
                  className="mr-1"
                />
                {['Email', 'Phone', 'Messaging Apps', 'In-person'][idx]}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">8. What motivates you the most?</label>
          <input
            name="q8"
            value={formData.q8}
            onChange={handleChange}
            className="w-full border-0 border-b ring-0 outline-0 px-4 py-2"
            type="text"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">9. Are you willing to work weekends?</label>
          <div className="flex flex-col gap-3 mt-3">
            {['Yes', 'No'].map((opt) => (
              <label key={opt} className="inline-flex font-light items-center">
                <input
                  type="checkbox"
                  name={`q9-${opt}`}
                  checked={formData.q9.includes(opt)}
                  onChange={handleChange}
                  className="mr-1"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">10. Which benefits are important to you?</label>
          <div className="flex flex-col gap-3 mt-3">
            {['A', 'B', 'C', 'D'].map((opt, idx) => (
              <label key={opt} className="inline-flex font-light items-center">
                <input
                  type="checkbox"
                  name={`q10-${opt}`}
                  checked={formData.q10.includes(opt)}
                  onChange={handleChange}
                  className="mr-1"
                />
                {['Health Insurance', 'Remote Work', 'Bonus Pay', 'Vacation Time'][idx]}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">11. Expected salary range</label>
          <input
            name="q11"
            value={formData.q11}
            onChange={handleChange}
            className="w-full border-0 border-b ring-0 outline-0 px-4 py-2"
            type="text"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">12. Are you currently studying?</label>
          <div className="flex flex-col gap-3 mt-3">
            {['Yes', 'No'].map((opt) => (
              <label key={opt} className="inline-flex font-light items-center">
                <input
                  type="checkbox"
                  name={`q12-${opt}`}
                  checked={formData.q12.includes(opt)}
                  onChange={handleChange}
                  className="mr-1"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">13. Any additional comments?</label>
          <input
            name="q13"
            value={formData.q13}
            onChange={handleChange}
            className="w-full border-0 border-b ring-0 outline-0 px-4 py-2"
            type="text"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">14. Preferred contact method</label>
          <div className="flex flex-col gap-3 mt-3">
            {['WhatsApp', 'Telegram', 'Email'].map((option) => (
              <label key={option} className="inline-flex font-light items-center">
                <input
                  type="radio"
                  name="q14"
                  value={option}
                  checked={formData.q14 === option}
                  onChange={handleChange}
                  className="mr-1"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">15. Your contact info</label>
          <input
            name="q15"
            value={formData.q15}
            onChange={handleChange}
            className="w-full border-0 border-b ring-0 outline-0 px-4 py-2"
            placeholder="Enter contact (email or number)"
            type="text"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">16. Are you currently employed? (Optional)</label>
          <div className="flex flex-col gap-3 mt-3">
            {['Yes', 'No'].map((opt) => (
              <label key={opt} className="inline-flex font-light items-center">
                <input
                  type="checkbox"
                  name={`q16-${opt}`}
                  checked={formData.q16.includes(opt)}
                  onChange={handleChange}
                  className="mr-1"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">17. What is your full name? (Optional)</label>
          <input
            name="q17"
            value={formData.q17}
            onChange={handleChange}
            className="w-full border-0 border-b ring-0 outline-0 px-4 py-2"
            type="text"
          />
        </div>

        <button
          type="submit"
          className="block font-light w-full"
        ><NormalButton
        block
        
      bgColor="#F7C6D0"
      color="#000"
      label="Submit Survey"
    />
          
        </button>
      </form>
    </div>
  );
};

export default FormSurvey;
