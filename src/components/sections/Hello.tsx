import { motion } from 'motion/react';
import { Zap, Palette, Code2, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Hello() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'hello';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const journeySteps = [
    {
      icon: Zap,
      title: 'Electrician',
      description: 'Systems & Problem-Solving',
      color: 'text-yellow-600'
    },
    {
      icon: Palette,
      title: 'Designer',
      description: 'Aesthetics & Structure',
      color: 'text-purple-600'
    },
    {
      icon: Code2,
      title: 'Developer',
      description: 'Clean & Accessible Code',
      color: 'text-blue-600'
    }
  ];

  return (
    <div className="bg-white h-[740px] relative rounded-[2px] shrink-0 w-full max-w-[1081px]" data-name="main">
      <div className="h-[740px] not-italic overflow-clip relative rounded-[inherit] w-full">
        {/* Animated Title */}
        <div className="absolute left-[calc(50%-35.5px)] top-[90px]">
          <motion.p 
            className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] text-[30px] text-nowrap tracking-[-0.225px] whitespace-pre text-neutral-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {typedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            >
              _
            </motion.span>
          </motion.p>
        </div>

        <div className="absolute inset-[151px_182px_80px_182px] overflow-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-[50px]"
          >
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] text-[16px] text-neutral-800 mb-[10px]">
              Welcome! I'm <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold">Sirius Nottin</span>, a Front-End Developer with a unique journey that bridges hands-on craftsmanship, creative design, and modern web development.
            </p>
          </motion.div>

          {/* Journey Visualization */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mb-[40px]"
          >
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] text-[14px] text-gray-600 mb-[24px] lowercase">
              my journey
            </p>
            <div className="flex items-center gap-[20px]">
              {journeySteps.map((step, index) => (
                <div key={index} className="flex items-center gap-[20px]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.2, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-[8px] flex-1"
                  >
                    <div className={`${step.color} bg-gray-50 rounded-full p-[16px] border border-gray-200`}>
                      <step.icon size={28} strokeWidth={1.5} />
                    </div>
                    <div className="text-center">
                      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] text-[14px] text-neutral-800">
                        {step.title}
                      </p>
                      <p className="font-['Inter:Light',_sans-serif] font-light leading-[16px] text-[12px] text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                  {index < journeySteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.6 + index * 0.2, duration: 0.4 }}
                    >
                      <ArrowRight size={20} className="text-gray-400" strokeWidth={1.5} />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] text-[16px] text-neutral-800">
              My path into technology began as an electrician, where I developed a deep understanding of systems, precision, and problem-solving. This foundation evolved through design and publishing, sharpening my eye for structure, aesthetics, and detail. Today, I combine all these experiences to build clean, accessible, and performant web interfaces using React, Next.js, and modern JavaScript, always with a focus on solid fundamentals and thoughtful user experience.
            </p>
          </motion.div>

          {/* Floating Background Elements */}
          <motion.div
            className="absolute top-[20px] right-[20px] opacity-5"
            animate={{ 
              rotate: 360,
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Code2 size={120} className="text-neutral-800" strokeWidth={0.5} />
          </motion.div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

export function HelloMobile() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'hello';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const journeySteps = [
    {
      icon: Zap,
      title: 'Electrician',
      description: 'Systems',
      color: 'text-yellow-600'
    },
    {
      icon: Palette,
      title: 'Designer',
      description: 'Aesthetics',
      color: 'text-purple-600'
    },
    {
      icon: Code2,
      title: 'Developer',
      description: 'Clean Code',
      color: 'text-blue-600'
    }
  ];

  return (
    <div className="bg-white rounded-[2px] h-full overflow-auto" data-name="main">
      <div className="box-border content-stretch flex flex-col gap-[11px] items-center not-italic overflow-clip px-[8px] py-[10px] relative rounded-[inherit] w-full text-neutral-800">
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative shrink-0 w-full text-center"
        >
          <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] text-[30px] tracking-[-0.225px]">
            {typedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            >
              _
            </motion.span>
          </p>
        </motion.div>

        <div className="css-7uevq9 font-['Inter:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">
          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-[24px] text-[15px] leading-[22px]"
          >
            Welcome! I'm <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold">Sirius Nottin</span>, a Front-End Developer with a unique journey.
          </motion.p>

          {/* Journey Visualization */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mb-[24px]"
          >
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] text-[13px] text-gray-600 mb-[16px] lowercase">
              my journey
            </p>
            <div className="flex flex-col gap-[16px]">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.2, duration: 0.4 }}
                  className="flex items-center gap-[12px]"
                >
                  <div className={`${step.color} bg-gray-50 rounded-full p-[10px] border border-gray-200`}>
                    <step.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] text-[14px] text-neutral-800">
                      {step.title}
                    </p>
                    <p className="font-['Inter:Light',_sans-serif] font-light leading-[14px] text-[11px] text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  {index < journeySteps.length - 1 && (
                    <ArrowRight size={16} className="text-gray-300" strokeWidth={1.5} />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="text-[14px] leading-[22px]"
          >
            From electrician to designer to developer, I combine all these experiences to build clean, accessible, and performant web interfaces using React, Next.js, and modern JavaScript.
          </motion.p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}
