import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const teamMembers = [
  {
    name: "Sanidhya Bhatia",
    role: "General Secretary",
    contact: "+91 8817471350",
    email: "s_bhatia[at]cs.iitr.ac.in",
    branch: "IV year B.Tech. (CSE)",
    enrollNo: "21114090",
    image: "/team/sanidhya.webp"
  },
  {
    name: "Sapna Burdak",
    role: "Additional Secretary",
    contact: "+91 9783637967",
    email: "s_burdak[at]bt.iitr.ac.in",
    branch: "IV year B.Tech. (BSBE)",
    enrollNo: "21111032",
    image: "/team/sapna.webp"
  },
  {
    name: "Aarsh Choudhary",
    role: "Additional Secretary",
    contact: "+91 7898133139",
    email: "a_choudhary[at]me.iitr.ac.in",
    branch: "IV year B.Tech. (P&I)",
    enrollNo: "21119001",
    image: "/team/aarsh.webp"
  },
  {
    name: "Shaswat Pandey",
    role: "Joint Secretary (Design)",
    contact: "+91 8957706482",
    email: "shaswat_p[at]me.iitr.ac.in",
    branch: "III Year B.Tech. (P&I)",
    enrollNo: "22321031",
    image: "/team/shaswat.webp"
  },
  {
    name: "Arijit Pramanik",
    role: "Joint Secretary (Design)",
    contact: "+91 8101869215",
    email: "arijit_p[at]dm.iitr.ac.in",
    branch: "II Year M.Tech. (DMM)",
    enrollNo: "23552014",
    image: "/team/arijit.webp"
  },
  {
    name: "Umang Singh",
    role: "Joint Secretary (Webd Vertical)",
    contact: "+91 7417424982",
    email: "umang_s[at]es.iitr.ac.in",
    branch: "IIT Year M.Tech. (GT)",
    enrollNo: "22410036",
    image: "/team/umang.webp"
  },
  {
    name: "Ayush Kr. Mahli",
    role: "Joint Secretary (Operations)",
    contact: "+91 9709894956",
    email: "ayush_km[at]me.iitr.ac.in",
    branch: "III Year B.Tech. (P&I)",
    enrollNo: "22119011",
    image: "/team/ayush.webp"
  },
  {
    name: "Swadesh Swain",
    role: "Joint Secretary (Operations Vertical)",
    contact: "+91 8758168241",
    email: "swadesh_s[at]ece.iitr.ac.in",
    branch: "IIT Year B.Tech. (ECE)",
    enrollNo: "22116091",
    image: "/team/swadesh.webp"
  },
  {
    name: "Diksha",
    role: "Joint Secretary (Editorial)",
    contact: "+91 9997393492",
    email: "diksha[at]hy.iitr.ac.in",
    branch: "II Year M.Tech. (Hydrology)",
    enrollNo: "23557002",
    image: "/team/diksha.webp"
  },
  {
    name: "Aashi Jain",
    role: "Joint Secretary (Editorial)",
    contact: "+91 8871083610",
    email: "aashi_j[at]ece.iitr.ac.in",
    branch: "III Year B.Tech. (ECE)",
    enrollNo: "22116001",
    image: "/team/aashi.webp"
  },
  {
    name: "Soumil Dutta",
    role: "Joint Secretary (Research and Analysis)",
    contact: "+91 6203436572",
    email: "soumil_d[at]me.iitr.ac.in",
    branch: "II Year M.Tech. (MIED)",
    enrollNo: "23564006",
    image: "/team/soumil.webp"
  },
  {
    name: "Dipanshu Nain",
    role: "Joint Secretary (Research and Analysis)",
    contact: "+91 9034911771",
    email: "dipanshu_n[at]ee.iitr.ac.in",
    branch: "II Year B.Tech. (EE)",
    enrollNo: "22115053",
    image: "/team/dipanshu.webp"
  },
  {
    name: "Jashan Grover",
    role: "Member (Design Vertical)",
    contact: "+91 8168388548",
    email: "jashan_g[at]me.iitr.ac.in",
    branch: "III Year B.Tech. (P&I)",
    enrollNo: "22119027",
    image: "/team/jashan.webp"
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#174869] mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 mb-8">
            Meet the dedicated individuals behind the IR Cell
          </p>
          <div className="max-w-2xl mx-auto text-gray-600">
            <p className="mb-4">
              International Relations Cell (IR Cell) is a student body who closely coordinates with International Relations Office (IR Office) to foster our institute vision and mission. IR Cell involves in providing information related to student exchange programme and scholarships.
            </p>
            <p>
              We regularly circulate relevant information to students through email and social media channels. Please feel free to reach us through email to ircell@iitr.ac.in if you require or wants to share any information related to student exchange programme and scholarships.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <CardTitle className="text-center text-[#174869]">{member.name}</CardTitle>
                <p className="text-center text-gray-600 font-medium">{member.role}</p>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-gray-600">{member.branch}</p>
                <p className="text-gray-600">Enroll No: {member.enrollNo}</p>
                <p className="text-gray-600">{member.contact}</p>
                <p className="text-gray-600">{member.email}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
} 