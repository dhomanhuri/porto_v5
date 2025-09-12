import React, { memo, useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const SectionHeader = () => (
  <div className="text-center mb-8 px-[5%]">
    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]" data-aos="zoom-in-up">
      Experiences
    </h2>
    <p className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg" data-aos="zoom-in-up" data-aos-delay="150">
      Professional roles and key responsibilities
    </p>
  </div>
)

const ExperienceItem = ({ company, role, period, bullets }) => (
  <div className="relative bg-gray-900/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:shadow-2xl transition-all" data-aos="fade-up">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <h3 className="text-lg sm:text-xl font-semibold text-white">{company}</h3>
      <span className="text-sm text-gray-400">{period}</span>
    </div>
    <p className="text-[#a855f7] font-medium mt-1">{role}</p>
    <ul className="list-disc pl-5 space-y-2 mt-3 text-gray-300">
      {bullets.map((b, i) => (
        <li key={i} className="text-sm leading-relaxed">{b}</li>
      ))}
    </ul>
  </div>
)

const Experiences = () => {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  const experiences = [
    {
      company: "PT. Sisindokom Lintasbuana",
      role: "Cyber Security Engineer",
      period: "2025 – Present",
      bullets: [
        "Designed, developed, and optimized solutions for digital transformation across Cyber Security, Cloud, AI, and Open Source Enterprise.",
        "Implemented PoC for leading solutions: BeyondTrust, Vicarius, Datasunrise, Imperva, Thales, Forcepoint, Menlo Security, Datadog.",
        "Ready to implement/PoC for enterprise technologies: Wazuh, IBM Guardium, Trellix, Darktrace, Fortinet, CyberArk, Elastic, ManageEngine, WatchGuard, Vault, GCP, AWS, BGB, YugaByte, MySQL, Kubernetes, Docker, Sophos, Proofpoint, Microsoft, Veeam, Commvault, Rubrik, F5, Versa, Kaspersky, LogRhythm, Exabeam, Rapid7, Sumo Logic.",
        "Performed technical analysis, troubleshooting, and risk management across IT infrastructure and security systems.",
        "Stayed current with industry trends to enhance performance and cyber resilience."
      ]
    },
    {
      company: "PT. Media Telekomunikasi Mandiri",
      role: "Lead of Deployment Engineering",
      period: "2022 – 2025",
      bullets: [
        "Developed SaaS platform for SOC with scalable, efficient, and dynamic dashboard.",
        "Built LMS with device integration via SSH, RDP, and web interfaces.",
        "Integrated network devices, Service Desk Plus (SDP), and OPManager NMS into custom dashboards.",
        "Managed production cloud on GCP, AWS, Alibaba using Docker, Node.js, Flask, Laravel, Nginx, MySQL, proxies, Cloudflare; integrated with internal networks.",
        "Designed ISP network architecture leveraging Starlink, tunneling (PPTP, EoIP, IPSec), virtualized devices, and advanced configs (LACP, xvLAN, QinQ) with Telkomsat.",
        "Business development with Telkomsat for Starlink Layer 2 resale; supported presales/PoC including HashiCorp Vault.",
        "Installed and configured solutions: DLP, ManageEngine AD360, Endpoint Central, and tools from Cisco, Juniper, Fortigate, WatchGuard, Sophos.",
        "Led and improved Deployment Engineering processes; prepared ISO audit documentation."
      ]
    },
    {
      company: "CV. Global Solusindo / PT. Cipta Karya Inovasi Technology",
      role: "Fullstack Web Developer",
      period: "2021 – 2022",
      bullets: [
        "Designed and implemented mobile app UI/UX using Flutter.",
        "Integrated MRT-provided APIs for application functionality.",
        "Developed e-commerce with Midtrans payment gateway and implemented SNAP (SNAP Nasional API Pembayaran).",
        "Refactored/rewrote code for maintainability, performance, and scalability.",
        "Created comprehensive API documentation for developers."
      ]
    }
  ]

  return (
    <section id="Experiences" className="h-auto py-16 sm:py-20 text-white px-[5%] sm:px-[5%] lg:px-[10%]">
      <SectionHeader />
      <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
        {experiences.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </div>
    </section>
  )
}

export default memo(Experiences)


