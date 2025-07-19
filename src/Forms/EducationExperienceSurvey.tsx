import { useFormik } from 'formik';
import * as Yup from 'yup';
import NormalButton from '../components/NormalButton';
import Navbar from '../components/Navbar';
import { PageWrapper } from '../components/PageWrapper';
import Footer from '../components/Footer';
import BlogHero from '../blog/BlogHero';
import { CardItem } from '../data/Types';

interface FormValues {
  q1: string; q2: string; q3: string; q4: string; q5: string;
  q6: string; q7: string; q8: string; q9: string; q10: string;
  q11: string; q12: string; q13: string; q14: string; q15: string;
  q16: string; q17: string; imageThought: string;
}

const defaultOptions: Record<keyof Pick<FormValues, 'q1' | 'q3' | 'q4' | 'q6' | 'q7' | 'q9' | 'q10' | 'q12' | 'q14' | 'q16'>, string[]> = {
  q1: ['Student', 'Professional', 'Freelancer', 'Entrepreneur'],
  q3: ['Yes', 'No'],
  q4: ['Office', 'Remote', 'Hybrid', 'Flexible'],
  q6: ['Yes', 'No'],
  q7: ['Email', 'Phone', 'Messaging Apps', 'In-person'],
  q9: ['Yes', 'No'],
  q10: ['Health Insurance', 'Remote Work', 'Bonus Pay', 'Vacation Time'],
  q12: ['Yes', 'No'],
  q14: ['WhatsApp', 'Telegram', 'Email'],
  q16: ['Yes', 'No']
};

const validationSchema: Yup.ObjectSchema<FormValues> = Yup.object({
  q1: Yup.string().required('Required'),
  q2: Yup.string().required('Required'),
  q3: Yup.string().required('Required'),
  q4: Yup.string().required('Required'),
  q5: Yup.string().required('Required'),
  q6: Yup.string().required('Required'),
  q7: Yup.string().required('Required'),
  q8: Yup.string().required('Required'),
  q9: Yup.string().required('Required'),
  q10: Yup.string().required('Required'),
  q11: Yup.string().required('Required'),
  q12: Yup.string().required('Required'),
  q13: Yup.string().required('Required'),
  q14: Yup.string().required('Required'),
  q15: Yup.string().required('Required'),
  q16: Yup.string().required('Required'),
  q17: Yup.string().required('Required'),
  imageThought: Yup.string().required('Required')
});

type Props = {
  title: string;
  author: string;
  image: string;
  created_at: string;
};

const EducationExperienceSurvey = ({ title, author, image, created_at }: Props) => {
  const formik = useFormik<FormValues>({
    initialValues: {
      q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '',
      q9: '', q10: '', q11: '', q12: '', q13: '', q14: '', q15: '', q16: '', q17: '', imageThought: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert('Form submitted!');
    }
  });

  const renderRadioGroup = (name: keyof FormValues, options: string[]) => (
    <div className="flex flex-col gap-3 mt-3">
      {options.map((opt) => (
        <label key={opt} className="inline-flex font-light items-center">
          <input
            type="radio"
            name={name}
            value={opt}
            checked={formik.values[name] === opt}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mr-2"
          />
          {opt}
        </label>
      ))}
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-red-500 text-sm">{formik.errors[name]}</p>
      )}
    </div>
  );

  // ✅ Create the CardItem for BlogHero
  const blog: CardItem = {
    id: 1,
    title,
    author,
    image,
    slug: 'youth-politics',
    body: '',
    description: '',
    category: 'Survey',
    buttonLabel: '',
    buttonLink: '',
    buttonBgColor: '',
    created_at: new Date().toISOString(),
  };

  const formattedDate = new Date(created_at).toDateString(); // returns 'Tue Jul 15 2025'


  return (
    <PageWrapper>
      <Navbar />
      <BlogHero blog={blog} height="medium" />
      <div>
        <h1 className="text-2xl sm:text-4xl max-w-xl mx-auto text-center font-semibold mt-7 md:mt-14">
          {title}
        </h1>

        <div className="flex w-fit mx-auto mt-6 gap-8 items-center mb-10 justify-center">
          <p className="text-base text-gray-600">
            {formattedDate}
          </p>
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 overflow-hidden bg-black/30 rounded-full">
              <img
                src="https://th.bing.com/th/id/OIP.ItvA9eX1ZIYT8NHePqeuCgHaHa?w=210"
                alt="Author"
                className="object-cover"
              />
            </div>
            <p className="font-bold">{author}</p>
          </div>
        </div>
      </div>

      <div className="my-10 mx-auto max-w-3xl px-4">
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Text Inputs */}
          {([
            ['q17', 'What is your full name?'],
            ['q15', 'Your contact info'],
            ['q2', 'What is your current city?'],
            ['q5', 'Describe your dream job'],
            ['q8', 'What motivates you the most?'],
            ['q11', 'Expected salary range'],
            ['q13', 'Any additional comments?'],
          ] as [keyof FormValues, string][]).map(([key, label]) => (
            <div key={key}>
              <label className="block font-semibold mb-1">{label}</label>
              <input
                name={key}
                value={formik.values[key]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border-b outline-0 ring-0 border-gray-300 px-4 py-2"
                type="text"
              />
              {formik.touched[key] && formik.errors[key] && (
                <p className="text-red-500 text-sm">{formik.errors[key]}</p>
              )}
            </div>
          ))}

          {/* Image Thought Prompt */}
          <div>
            <img
              src="../../Images/five.webp"
              alt="Prompt"
              className="w-[300px] mx-auto rounded-lg mb-4"
            />
            <label className="block font-semibold mb-1">
              What comes to mind when you see this picture?
            </label>
            <input
              name="imageThought"
              value={formik.values.imageThought}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border-b border-gray-300  px-4 py-2"
              placeholder="Your response..."
            />
            {formik.touched.imageThought && formik.errors.imageThought && (
              <p className="text-red-500 text-sm">{formik.errors.imageThought}</p>
            )}
          </div>

          {/* Radio Questions */}
          {Object.entries(defaultOptions).map(([key, options], idx) => (
            <div key={key}>
              <label className="block font-semibold mb-1">
                {idx + 1}. {(() => {
                  switch (key) {
                    case 'q1': return 'Which of these best describe you?';
                    case 'q3': return 'Would you consider relocating?';
                    case 'q4': return 'What are your preferred work environments?';
                    case 'q6': return 'Are you open to internships?';
                    case 'q7': return 'Preferred communication methods';
                    case 'q9': return 'Are you willing to work weekends?';
                    case 'q10': return 'Which benefits are important to you?';
                    case 'q12': return 'Are you currently studying?';
                    case 'q14': return 'Preferred contact method';
                    case 'q16': return 'Are you currently employed?';
                    default: return '';
                  }
                })()}
              </label>
              {renderRadioGroup(key as keyof FormValues, options)}
            </div>
          ))}

          <button type="submit" className="w-full">
            <NormalButton block bgColor="#F7C6D0" color="#000" label="Submit Survey" />
          </button>
        </form>
      </div>

      <Footer />
    </PageWrapper>
  );
};

export default EducationExperienceSurvey;
