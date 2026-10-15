// app/privacy/schoolapp/page.tsx

import {
  Shield,
  Bell,
  Database,
  Lock,
  Users,
  Server,
  RefreshCw,
  Mail,
  XCircle,
  CheckCircle2,
  Smartphone,
  FileText,
  Eye,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedBlobs, FloatingBlob } from "@/components/common/blobs";

// Data the app accesses (already managed by the school) — student-facing
const accessedDataStudents = [
  "Student name",
  "Admission number or student ID",
  "Class and section",
  "Attendance records",
  "Academic results and report cards",
  "Timetable",
  "Assignments and homework",
  "Fee information",
  "Announcements and notices",
];

// Data accessed by teacher and admin accounts
const accessedDataStaff = [
  "Staff name and employee/staff ID",
  "Role and assigned classes or subjects",
  "Contact details used for school communication",
  "Class rosters and student records relevant to assigned classes",
  "Attendance and grading entries made by the staff member",
  "School announcements and notices",
];

// Notification types
const notificationTypes = [
  "School announcements",
  "Notices",
  "Assignment reminders",
  "Fee reminders",
  "Academic updates",
  "Other notifications sent by the school",
];

// What the app does NOT do
const doesNotCollect = [
  "Sell personal information",
  "Track users for advertising",
  "Collect precise location information",
  "Record contacts",
  "Access photos, videos, or files unless you explicitly choose to share them",
  "Collect microphone or camera data without your permission",
];

// How information is used
const usagePoints = [
  "Authenticate users",
  "Display student, teacher, and admin information relevant to each account's role",
  "Provide access to school records appropriate to each user's permissions",
  "Allow teachers and admins to record and manage school data (e.g. attendance, grades)",
  "Send school notifications",
  "Maintain the security and reliability of the service",
];

// Policy sections rendered as cards
const policySections = [
  {
    title: "Data Storage",
    icon: Server,
    body: "Student, teacher, and administrative information is stored securely within the School ERP system managed by the respective educational institution. The App acts as a secure interface for accessing and, for authorized teacher and admin accounts, updating this information. It does not permanently store records on the device except where necessary for normal application functionality.",
  },
  {
    title: "Role-Based Access",
    icon: Lock,
    body: "The App supports student, teacher, and admin accounts, each with access limited to the information and actions appropriate to that role. Teachers can access data for their assigned classes and subjects; admins can access broader school data as configured by the institution. Access levels are determined and controlled by the school.",
  },
  {
    title: "Third-Party Services",
    icon: Database,
    body: "The App may use trusted third-party services required for operation, such as Firebase Cloud Messaging (FCM) for push notifications and cloud hosting and storage providers for secure application infrastructure. These services are used solely to provide application functionality.",
  },
  {
    title: "Data Security",
    icon: Shield,
    body: "We implement reasonable administrative, technical, and organizational measures to protect information from unauthorized access, disclosure, alteration, or destruction, across all account types.",
  },
  {
    title: "Children's Privacy",
    icon: Users,
    body: "The App is intended for use by students under the supervision of their educational institution and parents or guardians where applicable, as well as by teachers and administrators acting in their professional capacity. The App does not knowingly collect personal information directly from children beyond information already maintained by the school for educational purposes.",
  },
  {
    title: "Data Retention",
    icon: FileText,
    body: "Student, teacher, and administrative information remains under the control of the educational institution using the School ERP platform. Data retention is governed by the policies of the respective school.",
  },
  {
    title: "Changes to This Privacy Policy",
    icon: RefreshCw,
    body: "We may update this Privacy Policy from time to time. Any changes will be published on this page with an updated effective date.",
  },
];

export default function SchoolAppPrivacyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Consistent Background Layer */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-20" />
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.02] -z-20" />

      {/* Persistent Blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <AnimatedBlobs count={3} color="primary" baseDelay={0} />
        <AnimatedBlobs count={2} color="blue" baseDelay={5} />
        <FloatingBlob
          color="primary"
          size="w-[500px] h-[500px]"
          className="top-20 left-10"
          delay={0}
          speed={25}
        />
        <FloatingBlob
          color="cyan"
          size="w-[450px] h-[450px]"
          className="bottom-40 right-20"
          delay={3}
          speed={30}
        />
      </div>

      {/* Hero */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-20 z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 px-4 py-1.5 text-sm backdrop-blur-sm">
                <Sparkles className="w-3 h-3 mr-1 inline" />
                School ERP App — Students, Teachers &amp; Admins
              </Badge>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>

            <p className="text-muted-foreground text-lg mb-2">
              Effective Date: August 2, 2026
            </p>

            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy explains how the School ERP App ("the App")
              handles information when you use our services. The App is
              intended for students, teachers, and administrators of schools
              using our School ERP platform, and allows each type of user to
              securely access and, where authorized, manage information
              maintained by their educational institution.
            </p>
          </div>
        </div>
      </section>

      {/* Information We Access — Students */}
      <section className="py-16 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
                <Eye className="w-3 h-3 mr-1 inline" />
                What We Access — Students
              </Badge>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Information We Access for Student Accounts
              </h2>
              <p className="text-muted-foreground">
                For student accounts, the App displays information already
                provided and managed by the school through the School ERP
                system. The App does not create or collect new personal
                information for students beyond what is required for
                authentication and providing these services.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {accessedDataStudents.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-background/80 backdrop-blur-sm border hover:border-primary/30 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information We Access — Teachers & Admins */}
      <section className="py-16 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
                <Users className="w-3 h-3 mr-1 inline" />
                What We Access — Teachers &amp; Admins
              </Badge>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Information We Access for Teacher and Admin Accounts
              </h2>
              <p className="text-muted-foreground">
                Teacher and admin accounts access information relevant to
                their role, as configured by the school. This may include
                staff details and, for the purpose of performing their
                duties, class and student records within their assigned
                scope.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {accessedDataStaff.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-background/80 backdrop-blur-sm border hover:border-primary/30 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Push Notifications */}
      <section className="py-16 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
                <Bell className="w-3 h-3 mr-1 inline" />
                Notifications
              </Badge>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Push Notifications
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The App uses push notifications to deliver important updates
                to students, teachers, and admins. To provide these
                notifications, your device receives a notification token from
                the notification service. This token is used solely to
                deliver notifications to your device.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {notificationTypes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 p-3 rounded-lg bg-background/80 backdrop-blur-sm border text-sm"
                >
                  <Bell className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Information We Do Not Collect */}
      <section className="py-16 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
                <Shield className="w-3 h-3 mr-1 inline" />
                What We Don't Do
              </Badge>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Information We Do Not Collect
              </h2>
              <p className="text-muted-foreground">
                The App does not collect or sell personal information — for
                any user role — for advertising or marketing purposes.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {doesNotCollect.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-xl bg-background/80 backdrop-blur-sm border"
              >
                <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Information Is Used */}
      <section className="py-16 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
                <Smartphone className="w-3 h-3 mr-1 inline" />
                How It's Used
              </Badge>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                How Information Is Used
              </h2>
              <p className="text-muted-foreground">
                Information accessed in the App is used only to:
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {usagePoints.map((item, index) => (
              <div key={index}>
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-normal"
                >
                  {item}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remaining policy sections */}
      <section className="py-16 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {policySections.map((section, index) => (
              <div key={index}>
                <Card className="h-full bg-background/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {section.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {section.body}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights + Contact CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <AnimatedBlobs count={3} color="white" />
        <FloatingBlob
          color="white"
          size="w-80 h-80"
          className="top-10 left-10"
          delay={0}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Your Rights
            </h2>
            <p className="text-white/90 leading-relaxed mb-8">
              If you have questions about your personal information or wish to
              request correction or deletion of your records — whether as a
              student, teacher, or admin — please contact your educational
              institution directly. For questions about this Privacy Policy,
              please contact your school or the administrator responsible for
              your School ERP services.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-5 py-3 text-white">
              <Mail className="w-4 h-4" />
              <span className="text-sm">
                Reach out through your school's administrator
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}