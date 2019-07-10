import React from "react";
import Moment from "moment";


const [uploading, setUploading] = React.useState(false);
  const [completed, setCompleted] = React.useState(0);
  const [accountSettings, setAccountSettings] = React.useState({
    appsflyerReports: {
      lastUpdated: Moment()
        .subtract(7, "days")
        .format("MMM DD, YYYY HH:MM A"),
    },
  });

  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          setUploading(false);
          return 0;
        }
        const diff = Math.random() * 30;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  export default function mockUpload() {
    setUploading(true);
    setCompleted(0);
    setAccountSettings({ ...accountSettings, appsflyerReports: { lastUpdated: Moment().format("MMM DD, YYYY HH:MM A") } });
  }