"use client";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const services = [
  {
    title: "Software Development",
    description:
      "Bring your ideas to life with high-quality, scalable, and secure software solutions. We build custom web, mobile, and enterprise applications tailored to your business needs. Our team ensures seamless integration, smooth user experiences, and future-proof architecture—so your software grows as your business grows.",
  },
  {
    title: "Artificial Intelligence (AI)",
    description:
      "Empower your business with intelligent automation. Our AI solutions use machine learning, natural language processing, and predictive analytics to streamline operations, improve decision-making, and personalize customer experiences. From smart chatbots to advanced recognition systems—we help you unlock the full potential of AI.",
  },
  {
    title: "Data Analysis",
    description:
      "Make smarter decisions with meaningful insights. We clean, analyze, and interpret your data to uncover trends, patterns, and opportunities. Using modern analytics and machine learning techniques, we turn raw data into clear, actionable strategies that support your business goals.",
  },
  {
    title: "Cloud Services",
    description:
      "Move to the cloud with confidence. We design and implement secure, scalable cloud solutions suited to your exact needs. From cloud migration to optimization, we help you enhance performance, reduce costs, and increase reliability across leading cloud platforms.",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your business from digital threats. Our cybersecurity services safeguard your systems, networks, and data with advanced protection measures. We identify vulnerabilities, run penetration tests, and build robust security strategies to keep your business safe and resilient.",
  },
  {
    title: "IoT Solutions",
    description:
      "Connect your world with smart IoT solutions. We develop and deploy intelligent, interconnected systems that improve efficiency, monitor assets, and enable real-time insights. Whether it’s smart manufacturing, logistics, or healthcare—we build IoT solutions that power smarter operations.",
  },
];

export default function ServicesPage() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-start justify-center min-h-screen px-4 mx-auto">
        <div className="w-full mx-auto mt-32 sm:mt-28">
          <div className="max-w-2xl mx-auto lg:mx-0 mb-8 px-2">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Services
            </h2>
            <p className="mt-4 text-zinc-400">
              We deliver end-to-end technology solutions designed to scale with your business.
            </p>
          </div>

          <div className="w-full h-px bg-zinc-800 mb-8" />

          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {services.map((s) => (
              <Card key={s.title}>
                <div className="p-4 relative flex flex-col items-start gap-4 duration-700 group md:gap-6 md:p-8">
                  <span
                    className="absolute left-4 top-0 w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <h3 className="z-10 text-xl lg:text-2xl font-semibold duration-150 text-zinc-200 group-hover:text-white font-display">
                    {s.title}
                  </h3>
                  <p className="z-10 mt-2 text-sm leading-6 text-zinc-400 group-hover:text-zinc-200">
                    {s.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="h-24" />
        </div>
      </div>
    </div>
  );
}
