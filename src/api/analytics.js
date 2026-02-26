export const fetchAdmissionAnalytics = async (from, to) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalApplicants: 1250,
        verifiedApplicants: 820,
        rejectedApplicants: 230,

        applicationsPerProgram: [
          { program: "B.Tech", count: 420 },
          { program: "MBA", count: 300 },
          { program: "BBA", count: 210 },
          { program: "M.Tech", count: 180 },
          { program: "MCA", count: 140 },
        ],

        trends: [
          { date: "2026-02-01", applications: 50 },
          { date: "2026-02-02", applications: 75 },
          { date: "2026-02-03", applications: 90 },
          { date: "2026-02-04", applications: 120 },
          { date: "2026-02-05", applications: 160 },
          { date: "2026-02-06", applications: 210 },
        ],
      });
    }, 800);
  });
};
