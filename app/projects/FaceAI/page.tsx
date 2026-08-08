import { PageHeader } from "@/components/ui/PageHeader";
import { faceAI } from "@/data/projects";

export const metadata = {
  title: "AI Face Recognition | Asif Iqbal",
};

export default function FaceAIPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI & Insight Generation"
        title={faceAI.name}
        description={faceAI.tagline}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "AI Face Recognition" },
        ]}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16">
          {/* ================= LEFT CONTENT ================= */}

          <div>
            {/* ------------------------------------------------ */}
            {/* Problem Statement */}
            {/* ------------------------------------------------ */}

            <h2 className="text-2xl font-semibold">
              Problem statement
            </h2>

            <p className="mt-4 text-text-secondary leading-relaxed">
              Traditional face recognition systems often depend on fixed
              datasets, manual image preparation and isolated recognition
              scripts. This makes the workflow difficult to use as a
              practical application and limits the ability to continuously
              enrol and recognise people in real-world conditions.
            </p>

            <p className="mt-4 text-text-secondary leading-relaxed">
              This project explores a complete facial intelligence workflow
              built around real-time webcam input, deep face embeddings,
              similarity-based recognition and confidence validation. The
              objective was to turn individual computer-vision components
              into a reusable desktop application with persistent local
              identity data.
            </p>

            {/* ------------------------------------------------ */}
            {/* Core Objectives */}
            {/* ------------------------------------------------ */}

            <h2 className="mt-12 text-2xl font-semibold">
              Core objectives
            </h2>

            <ul className="mt-4 space-y-3">
              {[
                "Build a real-time face recognition application using a webcam.",
                "Automatically detect faces from live video input.",
                "Generate deep facial embeddings for enrolled identities.",
                "Recognise identities using embedding similarity.",
                "Use confidence thresholds to distinguish recognised and unknown faces.",
                "Create a multi-frame enrollment workflow instead of relying on a single image.",
                "Persist facial embeddings locally for future recognition sessions.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-text-secondary leading-relaxed"
                >
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-blue" />
                  {item}
                </li>
              ))}
            </ul>

            {/* ------------------------------------------------ */}
            {/* Architecture */}
            {/* ------------------------------------------------ */}

            <h2 className="mt-12 text-2xl font-semibold">
              Recognition architecture
            </h2>

            <p className="mt-4 text-text-secondary leading-relaxed">
              The application separates face detection, representation,
              comparison and decision-making into distinct stages. A live
              webcam frame is first analysed for faces. Detected faces are
              converted into numerical embeddings, which are then compared
              against previously enrolled identities using cosine similarity.
              The resulting confidence score is evaluated against a defined
              threshold before an identity is returned.
            </p>

            <div className="mt-8 rounded-[var(--radius-lg)] border border-border bg-surface p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-6">
                Recognition Pipeline
              </p>

              <div className="space-y-2">
                {[
                  {
                    label: "Webcam Input",
                    detail: "Live video frames",
                  },
                  {
                    label: "Face Detection",
                    detail: "Locate faces in frame",
                  },
                  {
                    label: "Face Embedding",
                    detail: "Generate deep representation",
                  },
                  {
                    label: "Similarity Matching",
                    detail: "Compare against stored embeddings",
                  },
                  {
                    label: "Confidence Validation",
                    detail: "Apply recognition threshold",
                  },
                  {
                    label: "Identity Decision",
                    detail: "Recognised / Unknown",
                  },
                ].map((stage, index, array) => (
                  <div key={stage.label}>
                    <div className="flex items-center justify-between gap-4 py-3 border-t border-border first:border-t-0">
                      <span className="text-sm font-medium">
                        {stage.label}
                      </span>

                      <span className="text-xs text-text-tertiary text-right">
                        {stage.detail}
                      </span>
                    </div>

                    {index < array.length - 1 && (
                      <div className="flex justify-center">
                        <div className="h-4 w-px bg-border" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ------------------------------------------------ */}
            {/* Face Detection */}
            {/* ------------------------------------------------ */}

            <h2 className="mt-12 text-2xl font-semibold">
              Real-time face detection
            </h2>

            <p className="mt-4 text-text-secondary leading-relaxed">
              The first stage of the system processes live webcam frames and
              identifies faces before recognition takes place. The detection
              layer is deliberately separated from identity recognition so
              that the system can locate multiple faces without immediately
              making an identity decision.
            </p>

            <p className="mt-4 text-text-secondary leading-relaxed">
              This separation also makes the architecture easier to extend,
              allowing the recognition layer to work independently of the
              underlying detection approach.
            </p>

            {/* ------------------------------------------------ */}
            {/* Enrollment */}
            {/* ------------------------------------------------ */}

            <h2 className="mt-12 text-2xl font-semibold">
              Multi-frame enrollment
            </h2>

            <p className="mt-4 text-text-secondary leading-relaxed">
              Rather than registering an identity from a single photograph,
              the application captures approximately 10–15 frames during the
              enrollment process. These samples provide multiple observations
              of the same person and produce a more representative facial
              embedding for subsequent recognition.
            </p>

            <ul className="mt-5 space-y-3">
              {[
                "Start enrollment from the desktop application.",
                "Capture multiple webcam frames automatically.",
                "Detect the enrolled face in each frame.",
                "Generate facial embeddings for the captured samples.",
                "Create a persistent identity representation.",
                "Store the resulting embedding locally.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-text-secondary leading-relaxed"
                >
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-blue" />
                  {item}
                </li>
              ))}
            </ul>

            {/* ------------------------------------------------ */}
            {/* Recognition */}
            {/* ------------------------------------------------ */}

            <h2 className="mt-12 text-2xl font-semibold">
              Identity recognition
            </h2>

            <p className="mt-4 text-text-secondary leading-relaxed">
              During recognition, a detected face is transformed into a deep
              embedding and compared against the locally stored identity
              embeddings. Cosine similarity provides the comparison score,
              while a configurable confidence threshold controls whether the
              system accepts the match.
            </p>

            <p className="mt-4 text-text-secondary leading-relaxed">
              This creates an explicit distinction between a confident
              identity match and an unknown face instead of forcing the system
              to assign the closest available identity.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Known Identity",
                  detail:
                    "Similarity exceeds the configured recognition threshold.",
                },
                {
                  title: "Unknown Face",
                  detail:
                    "Similarity remains below the required confidence level.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[var(--radius-lg)] border border-border p-6"
                >
                  <p className="font-mono text-xs uppercase tracking-wider text-accent-blue">
                    Decision
                  </p>

                  <h3 className="mt-3 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* ------------------------------------------------ */}
            {/* Persistent Embeddings */}
            {/* ------------------------------------------------ */}

            <h2 className="mt-12 text-2xl font-semibold">
              Persistent identity database
            </h2>

            <p className="mt-4 text-text-secondary leading-relaxed">
              Enrolled identities and their facial representations are stored
              locally so that recognition does not require repeating the
              enrollment process every time the application starts. This
              creates a simple persistent identity layer while keeping the
              project self-contained as a desktop application.
            </p>

            {/* ------------------------------------------------ */}
            {/* Performance */}
            {/* ------------------------------------------------ */}

            <h2 className="mt-12 text-2xl font-semibold">
              Hardware acceleration
            </h2>

            <p className="mt-4 text-text-secondary leading-relaxed">
              The application is designed to take advantage of CUDA-enabled
              hardware when available while retaining a CPU fallback. This
              allows the same application architecture to operate across
              different development environments without making GPU hardware
              a hard requirement.
            </p>

            {/* ------------------------------------------------ */}
            {/* Lessons Learned */}
            {/* ------------------------------------------------ */}

            <h2 className="mt-12 text-2xl font-semibold">
              Lessons learned
            </h2>

            <p className="mt-4 text-text-secondary leading-relaxed">
              The biggest lesson from this project was that a useful AI
              application requires more than a recognition model. Detection,
              enrollment, embedding generation, similarity matching,
              threshold validation, persistence and user interaction all need
              to work together as one reliable workflow.
            </p>

            <p className="mt-4 text-text-secondary leading-relaxed">
              Designing these components as separate modules also made the
              project easier to reason about and provided a foundation for
              extending the system beyond a basic computer-vision experiment.
            </p>

            {/* ------------------------------------------------ */}
            {/* Future Roadmap */}
            {/* ------------------------------------------------ */}

            <h2 className="mt-12 text-2xl font-semibold">
              Future roadmap
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Multi-person recognition",
                "Improved embedding models",
                "Recognition analytics",
                "Event logging",
                "Advanced confidence calibration",
                "Remote identity management",
                "Cloud-backed identity storage",
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-[var(--radius-sm)] border border-border text-text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}

          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-6">
                Workflow
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Webcam",
                    detail: "Live Video",
                  },
                  {
                    title: "Detection",
                    detail: "Face Localization",
                  },
                  {
                    title: "Embeddings",
                    detail: "Deep Representation",
                  },
                  {
                    title: "Similarity",
                    detail: "Cosine Matching",
                  },
                  {
                    title: "Validation",
                    detail: "Confidence Threshold",
                  },
                  {
                    title: "Identity",
                    detail: "Known / Unknown",
                  },
                ].map((item, index, array) => (
                  <div key={item.title}>
                    <div className="flex items-center justify-between gap-4 py-3 border-t border-border first:border-t-0">
                      <span className="text-sm font-medium">
                        {item.title}
                      </span>

                      <span className="text-xs text-text-tertiary text-right">
                        {item.detail}
                      </span>
                    </div>

                    {index < array.length - 1 && (
                      <div className="flex justify-center">
                        <div className="h-4 w-px bg-border" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[var(--radius-lg)] border border-border p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-4">
                Technology Stack
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "OpenCV",
                  "Deep Learning",
                  "Face Embeddings",
                  "Cosine Similarity",
                  "CUDA",
                  "CPU Fallback",
                  "Webcam",
                  "Desktop GUI",
                  "Local Database",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-[var(--radius-sm)] bg-surface text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-5 font-mono text-xs text-text-tertiary">
                Status: Active Development
              </p>
            </div>

            <div className="mt-6 rounded-[var(--radius-lg)] border border-border p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-4">
                Project Focus
              </p>

              <p className="text-sm text-text-secondary leading-relaxed">
                Real-time facial recognition, automated enrollment, deep
                embeddings and local identity management combined into a
                practical desktop AI application.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}