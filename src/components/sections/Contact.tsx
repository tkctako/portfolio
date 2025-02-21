import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { updateForm, setStatus, resetForm } from '../../features/contact/contactSlice';
import { toast } from 'react-toastify';

const Contact: React.FC = () => {
  const dispatch = useDispatch();
  const { form, status, error } = useSelector((state: RootState) => state.contact);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!form.name || !form.email || !form.message) {
      dispatch(setStatus('error'));
      return;
    }

    dispatch(setStatus('loading'));
    
    // Simulate API call
    try {
      const response = await fetch('http://localhost:3000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
        });

        if (!response.ok) {
          throw new Error('Failed to send email');
        }

        dispatch(setStatus('success'));
        dispatch(resetForm());
        toast.success('郵件已成功發送！');
      } catch (error) {
        console.error(error);
        dispatch(setStatus('error'));
      }
  };

  return (
    <section id="contact" className="w-full py-32 bg-zinc-900">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-light mb-12">Contact</h2>
            <p className="text-lg text-gray-300 mb-8">
              如果您對我的作品感興趣，歡迎與我聯繫。
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-sm tracking-[0.2em] text-gray-400 mb-2">EMAIL</p>
                <p className="text-lg">tako9555@gmail.com</p>
              </div>
              <div>
                <p className="text-sm tracking-[0.2em] text-gray-400 mb-2">SOCIAL</p>
                <div className="flex space-x-6">
                  {[
                    { name: 'Facebook', url: 'https://www.facebook.com/TKCArtwork/' },
                    { name: 'X(Twitter)', url: 'https://mobile.twitter.com/colin_5683' },
                    { name: 'Pixiv', url: 'https://www.pixiv.net/users/2302941' }
                  ].map(platform => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      className="text-sm tracking-wider hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {platform.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm tracking-[0.2em] text-gray-400">NAME</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => dispatch(updateForm({ name: e.target.value }))}
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm tracking-[0.2em] text-gray-400">EMAIL</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => dispatch(updateForm({ email: e.target.value }))}
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm tracking-[0.2em] text-gray-400">MESSAGE</label>
              <textarea
                value={form.message}
                onChange={(e) => dispatch(updateForm({ message: e.target.value }))}
                rows={5}
                className="w-full bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-white transition-colors resize-none"
                placeholder="Your message"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm">
                Please fill in all fields correctly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-4 text-sm tracking-[0.2em] transition-colors ${
                status === 'loading'
                  ? 'bg-gray-700 text-gray-300 cursor-not-allowed'
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              {status === 'loading' ? '傳送中...' : '傳送'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;