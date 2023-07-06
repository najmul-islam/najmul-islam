"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { Container, Row } from "react-bootstrap";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const serviceCollectionRef = collection(db, "services");

    const getServices = async () => {
      const data = await getDocs(serviceCollectionRef);
      setServices(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getServices();
  }, []);

  return (
    <section className={`pt-5 bg-dark text-white`} id="service">
      <h2 className="text-white mb-5 text-center">
        <span className="fw-lighter">My</span>{" "}
        <span className="fw-bolder">Services</span>
      </h2>

      <Container>
        <Row className="">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

          {/* 
            <ServiceCard
              icon={<SiRedux />}
              title="Redux Implementation"
              description="Incorporating state management libraries like Redux to handle complex application state and ensure efficient data flow within the React.js and Next.js applications."
            />
            <ServiceCard
              icon={<FaChartLine />}
              title="Performance Optimization"
              description="Optimizing the performance of React.js and Next.js applications by implementing best practices, code optimization, and leveraging caching techniques to improve page load times and overall user experience."
            />

            <ServiceCard
              icon={<FaServer />}
              title="Deployment and Hosting"
              description="Assisting with the deployment and hosting of React.js and Next.js applications, ensuring they are accessible to users worldwide."
            />

            <ServiceCard
              icon={<FaBriefcaseMedical />}
              title="Ongoing Maintenance and Support"
              description="Providing ongoing maintenance, updates, and technical support to keep React.js and Next.js applications secure, up-to-date, and functioning smoothly."
            /> */}

          {/* deleted */}
          {/* <ServiceCard
              icon={<GrIntegration />}
              title="React.js and Next.js Integration"
              description="Integrating React.js and Next.js with backend systems and APIs to enable data retrieval, storage, and communication. This can involve integrating with databases, RESTful APIs, GraphQL, or other data sources."
            /> */}

          {/* <ServiceCard
              icon={<FaDesktop />}
              title="Responsive Web Design with React.js and Next.js"
              description="Developing responsive web applications that adapt smoothly to different screen sizes and devices, ensuring an optimal user experience across desktop, tablet, and mobile platforms."
            /> */}

          {/* <ServiceCard
              icon={<BsGear />}
              title="Custom React Component Development"
              description="Creating custom React components tailored to your specific project requirements. These components can enhance the functionality and user experience of your web application."
            /> */}

          {/* <ServiceCard
            icon={<SiReactquery />}
            title="RTK Query Integration"
            description="Integrating RTK Query, a data fetching and caching library, to simplify API data fetching and management within Redux."
          /> */}

          {/* <ServiceCard
            icon={<IoIosApps />}
            title="Migration and Upgrades"
            description="Assisting with migrating existing applications to React.js, Redux, RTK Query, and Next.js or upgrading outdated versions to leverage the latest features and enhancements."
          /> */}

          {/* <ServiceCard
            icon={<SiJest />}
            title="Testing and Debugging"
            description="Conducting thorough testing and debugging processes to identify and resolve issues, ensuring the stability and functionality of React.js and Next.js applications."
          /> */}

          {/* <ServiceCard
            icon={<DiGoogleAnalytics />}
            title="Analytics and Tracking"
            description="Integrating analytics tools (such as Google Analytics or Mixpanel) to gather insights on user behavior, track conversions, and improve application performance."
          /> */}
        </Row>
      </Container>
    </section>
  );
};
export default Service;
