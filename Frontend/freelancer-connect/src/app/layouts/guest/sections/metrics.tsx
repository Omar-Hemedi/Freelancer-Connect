import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const metrics = [
  { value: 99.99, label: "Uptime", description: "For Freelancer Directory, with zero maintenance downtime" },
  { value: 600, label: "Million Users", description: "Trusted by over 600 million users around the world" },
  { value: 100, label: "Countries", description: "Freelancer Directory is used in over 100 countries" },
  { value: 5, label: "Million Projects", description: "Over 5 million projects completed on our platform" },
];

const AnimatedCounter = ({ value }: { value: number }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      className="text-4xl font-bold text-gray-900 dark:text-white"
    >
      {inView ? <CountUp start={0} end={value} duration={2} /> : 0}+
    </motion.span>
  );
};

const MetricsSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // Fade in and slide up
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.2 }} // Animate when 20% of the section is visible
      className="bg-white dark:bg-gray-900 py-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }} // Fade in and slide up
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered delay
              viewport={{ amount: 0.2 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              {/* Animated Value */}
              <div className="text-4xl font-bold text-gray-900 dark:text-white">
                <AnimatedCounter value={metric.value} />
              </div>

              {/* Label */}
              <p className="mt-2 text-lg font-semibold text-gray-600 dark:text-gray-300">
                {metric.label}
              </p>

              {/* Description */}
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MetricsSection;
