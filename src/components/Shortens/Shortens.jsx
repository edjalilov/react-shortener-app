import { useState } from "react";
import { useSelector } from "react-redux";
import { selectLinks } from "../../store/slice/linkSlice";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Shortens.module.scss";

export const Shortens = () => {
  const [copiedLinks, setCopiedLinks] = useState(null);
  const links = useSelector(selectLinks);

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopiedLinks(link);
    });
  };

  if (!links?.length) return null;

  return (
    <div className={styles.container}>
      <div className={styles.shortens}>
        {links.map((item) => (
          <AnimatePresence key={item.code}>
            <motion.div
              data-active={copiedLinks === item.full_short_link2}
              className={styles.item}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
            >
              <span>{item.original_link}</span>
              <span>{item.full_short_link2}</span>
              <button onClick={() => copyToClipboard(item.full_short_link2)}>
                {copiedLinks === item.full_short_link2 ? "Copied!" : "Copy"}
              </button>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};
