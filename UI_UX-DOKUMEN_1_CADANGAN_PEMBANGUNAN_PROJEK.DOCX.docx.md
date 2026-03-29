**TENDER PERKHIDMATAN PEMBANGUNAN SISTEM e-MAHKAMAH PERUSAHAAN (eMP) v2.0**   
**DI MAHKAMAH PERUSAHAAN MALAYSIA, KEMENTERIAN SUMBER MANUSIA**

Petender dikehendaki memberikan cadangan pembangunan yang menarik, lengkap dan komprehensif bukan sahaja dari aspek teknikal tetapi juga meliputi kaedah pelaksanaan.  
   
Cadangan pendekatan MESTILAH meliputi tetapi tidak terhad kepada aspek-aspek seperti berikut:

**CADANGAN PEMBANGUNAN eMP v2.0:**

1) Metodologi Pembangunan eMP v2.0;    
2) Cadangan Antara Muka/ Prototaip eMP v2.0 dengan merujuk kepada maklumat di **LAMPIRAN B – Senarai Aplikasi dan Modul Sedia Ada dan LAMPIRAN C\_Pengenalan Projek dan Keterangan Modul eMPv2.0**;   
3) Cadangan hendaklah menyatakan ciri-ciri keselamatan aplikasi merangkumi dan tidak terhad seperti berikut:  
1. Perlindungan bagi privasi maklumat   
2. Kawalan akses kepada maklumat   
3. Perlindungan dari virus dan *malware*  
4. Audit Trail   
5. Multi Factor Authentication (MFA)   
6. *Encryption* yang memenuhi piawaian MySEAL   
     
4) Cadangan Perisian dan Teknologi Pembangunan Sistem yang dicadangkan. Sila nyatakan dan jelaskan  
1. Perisian Pembangunan Sistem;  
2. Bahasa Pengaturcaraan;  
3. *Framework;*  
4. Pangkalan Data*;* dan  
5. Lain-lain (Nilai Tambah Cadangan) yang akan digunakan semasa pembangunan eMP v2.0 mengikut format jadual yang berikut:

   

| Bil. | Perisian / Pengaturcaraan / Tools | Bilangan Lesen Perisian | Keterangan |
| :---: | :---: | :---: | :---: |
|   |  |  |  |

5) Cadangan Arkitektur Keseluruhan Sistem dan spesifikasi server mestilah mengambil kira keperluan *Virtualization*, *High* *Availability*. **Sila jelaskan reka bentuk arkitektur keseluruhan sistem yang dicadangkan**;  
6) Rekabentuk arkitektur keseluruhan fungsi dan komponen Modul memenuhi ciri-ciri *ease of use*, *flexible*, *scalable*, *expandable* dan boleh dikonfigurasi  
7) Lain-lain (Nilai Tambah Cadangan).

# **1\) Executive Overview**

## **1.1 Ringkasan Projek**

Projek eMP v2.0 ialah pembangunan semula menyeluruh platform digital Mahkamah Perusahaan Malaysia bagi menyokong proses teras mahkamah secara hujung-ke-hujung, bermula daripada pendaftaran kes, agihan kes, prosiding, pengurusan kes, pengeluaran award, sehinggalah kepada carian award dan pelaporan. Lampiran C menerangkan bahawa projek ini bertujuan memastikan kesinambungan bisnes teras mahkamah, memodenkan modul sedia ada, memperkukuh keselamatan, dan menyediakan saluran maklumat pengurusan kes yang lebih selamat dan berintegriti. 

Sistem sedia ada pula terdiri daripada beberapa aplikasi berasingan seperti eIC, eICx, e-Filing/e-Service, portal MPM, dan paparan makluman mahkamah, yang dibangunkan menggunakan teknologi Java, Ajax, Tomcat, Apache Web dan MySQL. Ini menunjukkan keperluan tinggi untuk konsolidasi dan pemodenan seni bina sistem.   

## **1.2 Objektif Penyelesaian Yang Dicadangkan**

Cadangan penyelesaian teknikal ini bertujuan untuk:

* membangunkan satu platform bersepadu untuk 13 modul utama eMP v2.0

* memodenkan seni bina daripada sistem legasi kepada seni bina modular berasaskan API

* menyokong log masuk berpusat dan integrasi MyDigital ID

* membolehkan integrasi data dengan JPPM bagi pendaftaran kes

* menyediakan Carian Pintar Award berasaskan full-text, semantic dan vector search

* meningkatkan keselamatan aplikasi, data dan persekitaran selaras dengan keperluan OWASP, MFA, audit trail dan encryption   

## **1.3 Prinsip Reka Bentuk Cadangan**

Cadangan sistem hendaklah mematuhi prinsip berikut:

* Web-based & responsive

* API-ready

* Scalable

* Secure-by-design

* Future-proof

* Modular

* High Availability capable

* Government-friendly on-prem deployment

Spesifikasi tender mewajibkan cadangan arkitektur dalam virtual environment, menekankan High Availability, Load Balancing, MVC, teknologi sumber terbuka, pangkalan data utama MySQL, serta keperluan UI/UX moden dan sistem responsif merentas peranti

# **2\) Complete System Architecture Diagram**

`+----------------------------------------------------------------------------------+`  
`|                            eMP v2.0 DIGITAL PLATFORM                             |`  
`+----------------------------------------------------------------------------------+`

   `PUBLIC USERS                 EXTERNAL USERS                    INTERNAL USERS`  
`+----------------+      +--------------------------+      +--------------------------+`  
`| Public Visitor |      | Lawyer / Claimant /      |      | YDP / Chairman /         |`  
`| Award Search   |      | Respondent / Panel       |      | Registrar / AR / Admin   |`  
`| Schedule View  |      | e-Filing / e-Service     |      | Full Internal Operation  |`  
`+-------+--------+      +------------+-------------+      +-------------+------------+`  
        `|                              |                                  |`  
        `+------------------------------+----------------------------------+`  
                                       `|`  
                                       `v`  
`+----------------------------------------------------------------------------------+`  
`|                          FRONTEND / EXPERIENCE LAYER                             |`  
`|----------------------------------------------------------------------------------|`  
`|  Next.js Web Portal                                                              |`  
`|  - Public Portal                                                                 |`  
`|  - Authenticated User Portal                                                     |`  
`|  - Internal Court Portal                                                         |`  
`|  - Admin Console                                                                 |`  
`|  - Responsive UI (Desktop / Tablet / Mobile)                                     |`  
`+-----------------------------------+----------------------------------------------+`  
                                    `|`  
                                    `v`  
`+----------------------------------------------------------------------------------+`  
`|                        ACCESS & SECURITY GATEWAY LAYER                           |`  
`|----------------------------------------------------------------------------------|`  
`|  Centralized Access Management                                                   |`  
`|  - SSO / Single Entry Point                                                      |`  
`|  - MyDigital ID Integration                                                      |`  
`|  - MFA                                                                           |`  
`|  - RBAC                                                                          |`  
`|  - Session Management                                                            |`  
`|  - API Authorization                                                             |`  
`|  - Audit Logging                                                                 |`  
`+-----------------------------------+----------------------------------------------+`  
                                    `|`  
                                    `v`  
`+----------------------------------------------------------------------------------+`  
`|                           APPLICATION / SERVICE LAYER                            |`  
`|----------------------------------------------------------------------------------|`  
`| Symfony PHP Core Services                                                        |`  
`|                                                                                  |`  
`|  [M1] Portal eMP                  [M8] Carian Pintar Award                       |`  
`|  [M2] Access Mgmt                 [M9] Pendaftaran Kes                           |`  
`|  [M3] Pengurusan Notis            [M10] Pengurusan Kes                           |`  
`|  [M4] e-Filing & e-Service        [M11] Perjanjian Kolektif                      |`  
`|  [M5] e-Sebutan                   [M12] Dashboard & Laporan                      |`  
`|  [M6] Jadual Mahkamah             [M13] Pentadbir Sistem                         |`  
`|  [M7] Paparan Kandungan Digital                                                  |`  
`|                                                                                  |`  
`|  Shared Services                                                                 |`  
`|  - Notification Service                                                          |`  
`|  - Document Service                                                              |`  
`|  - Search Index Sync Service                                                     |`  
`|  - Integration Monitoring                                                        |`  
`|  - Workflow / Rules Engine                                                       |`  
`+-----------------------------------+----------------------------------------------+`  
                                    `|`  
                    `+---------------+------------------+-------------------+`  
                    `|                                  |                   |`  
                    `v                                  v                   v`  
`+--------------------------+      +--------------------------------+   +----------------------+`  
`| TRANSACTION DATABASE     |      | SEARCH / AI DATABASE           |   | OBJECT STORAGE       |`  
`|--------------------------|      |--------------------------------|   |----------------------|`  
`| MySQL Enterprise         |      | PostgreSQL + pgvector          |   | MinIO                |`  
`| Main transactional DB    |      | Full-text / semantic / vector  |   | Documents / PDFs     |`  
`| Case / Registry / Notice |      | Award search index             |   | Filing attachments   |`  
`| Schedule / Users / Logs  |      | OCR text + metadata search     |   | Scanned awards       |`  
`+--------------------------+      +--------------------------------+   +----------------------+`

                                    `|`  
                                    `v`  
`+----------------------------------------------------------------------------------+`  
`|                              INTEGRATION LAYER                                   |`  
`|----------------------------------------------------------------------------------|`  
`| API Gateway / Integration Services                                               |`  
`| - REST / SOAP                                                                    |`  
`| - Real-time / Batch / SFTP / HTTPS                                               |`  
`| - Integration Monitoring                                                         |`  
`| - API Key / Token Control                                                        |`  
`| - Retry / Failure Isolation                                                      |`  
`+---------------------------+--------------------------------+---------------------+`  
                            `|                                |`  
                            `v                                v`  
                 `+--------------------+            +----------------------+`  
                 `| JPPM Integration   |            | MyDigital ID         |`  
                 `| Case Registration  |            | Authentication       |`  
                 `+--------------------+            +----------------------+`

                                    `|`  
                                    `v`  
`+----------------------------------------------------------------------------------+`  
`|                           INFRASTRUCTURE / PLATFORM LAYER                        |`  
`|----------------------------------------------------------------------------------|`  
`| Linux Ubuntu on Government VM                                                    |`  
`| - Virtualization                                                                 |`  
`| - Staging / Production at JDN                                                    |`  
`| - HA-ready deployment                                                            |`  
`| - Load Balancing                                                                 |`  
`| - Backup / Restore / DR                                                          |`  
`| - Logging / Monitoring                                                           |`  
`+----------------------------------------------------------------------------------+`

## **2.1 Justifikasi Architecture**

Cadangan ini sejajar dengan spesifikasi kerana tender mewajibkan:

* arkitektur dalam **virtual environment** 

* penggunaan **MySQL** sebagai pangkalan data utama 

* penggunaan pangkalan data relasi-vektor seperti **PostgreSQL \+ pgvector** untuk Modul Carian Pintar 

* **High Availability**, **Load Balancing**, dan seni bina yang scalable 

* pembangunan berasaskan **MVC** atau setara 

* sistem web-based, responsif, dan menyokong pelbagai browser/peranti  

# **3\) Module Architecture Design**

Berikut ialah pecahan **13 modul** dengan fokus fungsi, actor, dan interaksi utama berdasarkan Lampiran C.

`+----------------------------------------------------------------------------------+`  
`|                             MODULE ARCHITECTURE MAP                              |`  
`+----------------------------------------------------------------------------------+`

`[M1`  
`] Portal eMP  - Landing page utama`  
  `- Public info, schedule, award search, case info, collective agreement`  
  `- Public-facing, bilingual, CMS-enabled`

`[M2] Pengurusan Akses Berpusat`  
  `- Single Entry Point`  
  `- SSO / MyDigital ID / role-based access / MFA`

`[M3] Pengurusan Notis`  
  `- Main task page`  
  `- Alerts, reminders, new cases, work queues by access right`

`[M4] e-Filing & e-Services`  
  `- External filing by lawyer / claimant / respondent / panel`  
  `- Upload documents, case submission`

`[M5] e-Sebutan (e-Mention)`  
  `- Online mention via chatting`  
  `- Bilingual`

`[M6] Jadual Mahkamah`  
  `- Daily / weekly / monthly court calendar`  
  `- Court hearing management view`

`[M7] Paparan Kandungan Digital Elektronik`  
  `- Displays notices / schedule / room info / announcements on screens`

`[M8] Carian Pintar (Award)`  
  `- Full-text search`  
  `- Tokenization / stemming`  
  `- Semantic search`  
  `- Vector search`  
  `- Search all legacy + newly scanned awards`

`[M9] Pendaftaran Kes`  
  `- New case registration`  
  `- Auto case distribution suggestion`  
  `- YDP approval`  
  `- JPPM data integration`

`[M10] Pengurusan Kes`  
  `- Core business process until case closure`

`[M11] Perjanjian Kolektif`  
  `- Collective agreement management`

`[M12] Dashboard dan Laporan`  
  `- Court statistics / reports / management insight`

`[M13] Pentadbir Sistem`  
  `- System administration / internal operation / setup`

## **3.1 Module Interaction Flow**

`[M1 Portal]`  
   `|--> [M8 Search Award]`  
   `|--> [M6 Court Schedule]`  
   `|--> [M4 e-Filing]`  
   `|--> [M2 Access Mgmt]`

`[M2 Access Mgmt]`  
   `|--> semua modul yang memerlukan autentikasi`  
   `|--> MyDigital ID`  
   `|--> role-based routing`

`[M4 e-Filing]`  
   `|--> [M9 Pendaftaran Kes]`  
   `|--> [M10 Pengurusan Kes]`  
   `|--> [Object Storage]`  
   `|--> [Notification Service]`

`[M9 Pendaftaran Kes]`  
   `|--> [JPPM Integration]`  
   `|--> [M10 Pengurusan Kes]`  
   `|--> [M6 Jadual Mahkamah]`

`[M10 Pengurusan Kes]`  
   `|--> [M3 Pengurusan Notis]`  
   `|--> [M5 e-Sebutan]`  
   `|--> [M6 Jadual Mahkamah]`  
   `|--> [M8 Carian Award - publish award]`  
   `|--> [M12 Dashboard & Laporan]`

`[M7 Paparan Digital]`  
   `|--> tarik maklumat dari [M6], [M3], [M10]`

`[M8 Carian Pintar Award]`  
   `|--> MySQL metadata`  
   `|--> PostgreSQL + pgvector`  
   `|--> MinIO scanned PDFs`  
   `|--> OCR indexed content`

`[M13 Pentadbir Sistem]`  
   `|--> users / roles / API / logs / settings / integration monitoring`

## **3.2 Actor-to-Module Mapping**

`PUBLIC USER`  
  `-> M1 Portal`  
  `-> M6 Jadual Mahkamah`  
  `-> M8 Carian Pintar Award`

`LAWYER / CLAIMANT / RESPONDENT / PANEL`  
  `-> M2 Access`  
  `-> M4 e-Filing`  
  `-> M5 e-Sebutan`  
  `-> M6 Jadual`  
  `-> M8 Award Search`

`YDP`  
  `-> M2 Access`  
  `-> M3 Notis`  
  `-> M9 Pendaftaran Kes`  
  `-> M10 Pengurusan Kes`  
  `-> M12 Dashboard`

`PENGERUSI`  
  `-> M2 Access`  
  `-> M5 e-Sebutan`  
  `-> M6 Jadual`  
  `-> M10 Pengurusan Kes`  
  `-> M8 Award`

`PENDAFTAR / AR / UPK`  
  `-> M2 Access`  
  `-> M3 Notis`  
  `-> M6 Jadual`  
  `-> M9 Pendaftaran Kes`  
  `-> M10 Pengurusan Kes`  
  `-> M12 Laporan`

`CA UNIT`  
  `-> M11 Perjanjian Kolektif`

`ADMIN`  
  `-> M13 Pentadbir Sistem`  
  `-> M2 Access`  
  `-> M3 Notis`  
  `-> M7 Digital Display`

# **4\) User Story Framework**

Di bawah ialah format user story asas yang boleh terus dijadikan backlog kepada BA, UI/UX, dan technical team.

## **4.1 Public Portal Stories**

`US-001`  
`As a public user,`  
`I want to access the main eMP portal,`  
`so that I can view court-related information and access public services.`

`US-002`  
`As a public user,`  
`I want to search full awards using keywords or metadata,`  
`so that I can find relevant Industrial Court decisions.`

`US-003`  
`As a public user,`  
`I want to view daily/weekly/monthly court schedule,`  
`so that I know upcoming hearings and case slots.`

`US-004`  
`As a public user,`  
`I want to read court notices and announcements,`  
`so that I can stay informed of current updates.`

## **4.2 Access & Authentication Stories**

`US-010`  
`As a registered user,`  
`I want a single entry login page,`  
`so that I can access the correct service based on my role.`

`US-011`  
`As a registered user,`  
`I want to login using MyDigital ID when applicable,`  
`so that authentication is secure and government-compliant.`

`US-012`  
`As a system administrator,`  
`I want role-based access control,`  
`so that users only access modules relevant to their role.`

`US-013`  
`As a system administrator,`  
`I want MFA enforced for privileged roles,`  
`so that access to sensitive data is protected.`

## **4.3 e-Filing Stories**

`US-020`  
`As a lawyer or claimant,`  
`I want to register an account,`  
`so that I can submit cases and documents online.`

`US-021`  
`As an external party,`  
`I want to create a new filing,`  
`so that I can submit a dispute to the court digitally.`

`US-022`  
`As an external party,`  
`I want to upload supporting documents,`  
`so that the court can process my filing.`

`US-023`  
`As an external party,`  
`I want to receive filing confirmation and status updates,`  
`so that I know my submission progress.`

## **4.4 Case Registration & Case Management Stories**

`US-030`  
`As a registrar,`  
`I want to review submitted filings,`  
`so that only complete and valid submissions proceed.`

`US-031`  
`As a registrar,`  
`I want the system to generate a new case registration draft,`  
`so that case intake is faster and more consistent.`

`US-032`  
`As the system,`  
`I want to suggest case distribution automatically,`  
`so that case allocation is balanced according to workload.`

`US-033`  
`As YDP,`  
`I want to review and approve case distribution,`  
`so that final court assignment follows authority approval.`

`US-034`  
`As a court officer,`  
`I want to manage case details, documents, and status,`  
`so that the full case lifecycle is tracked centrally.`

`US-035`  
`As a chairman,`  
`I want to record proceedings and upload awards,`  
`so that case closure and decision publication are controlled.`

## **4.5 e-Sebutan & Schedule Stories**

`US-040`  
`As a registrar,`  
`I want to manage court schedules in calendar form,`  
`so that hearings and mentions are arranged clearly.`

`US-041`  
`As a hearing participant,`  
`I want to join e-Sebutan online,`  
`so that mention sessions can be handled digitally.`

`US-042`  
`As a chairman,`  
`I want to conduct e-Sebutan through chat-based interaction,`  
`so that virtual mention is lightweight and practical.`

# **Module Mapping: e-Sebutan Manual → eMP 2.0 Modules**

Based on the manual workflow (login, join mention room, messaging, leave session), the features should be distributed across multiple modules rather than exist as a single isolated feature.

| Manual Function | Current Behaviour | eMP 2.0 Module | Enhancement |
| ----- | ----- | ----- | ----- |
| Login as eFiling User / Guest | User authentication | **User Identity & Access Management** | Add SSO, role-based access |
| Enter Room Code | Join hearing session | **e-Sebutan Management Module** | Integrate with case schedule |
| Waiting for Approval | Officer approves entry | **Session Moderation Module** | Queue monitoring & participant control |
| View Today’s e-Mentions | List of sessions | **Court Schedule Management** | Calendar-based hearing system |
| Send Message / Reply | Text communication | **Court Communication Module** | Add document sharing & transcript |
| View Mention Details | Session metadata | **Case Management Module** | Link to case record |
| Leave Mention | Exit session | **Session Lifecycle Management** | Auto logging and audit trail |

## **4.6 Award Search Stories**

`US-050`  
`As an internal officer,`  
`I want to search awards by legal meaning and context,`  
`so that I can find relevant precedents more accurately.`

`US-051`  
`As the search engine,`  
`I want to support tokenization, stemming, full-text and vector search,`  
`so that search results are precise and comprehensive.`

`US-052`  
`As a court officer,`  
`I want newly scanned awards to be indexed automatically,`  
`so that legacy documents are searchable together with new records.`

## **4.7 Reporting & Admin Stories**

`US-060`  
`As management,`  
`I want dashboard and reports on case workload and status,`  
`so that I can monitor operational performance.`

`US-061`  
`As an admin,`  
`I want to manage users, settings, and permissions,`  
`so that the system can be operated securely.`

`US-062`  
`As an admin,`  
`I want to monitor API integrations,`  
`so that failed transactions can be tracked and resolved.`

UI/UX Brief

````
# UI/UX PROTOTYPE BRIEF  
# eMP v2.0 — Industrial Court Digital Platform

Prepared by: Project Lead / Solution Architect  

Purpose:  
Provide a complete guideline for the UI/UX team to design a **functional prototype of the eMP v2.0 system**, aligned with:

- Tender specification
- Lampiran C module structure
- Real Industrial Court operational workflow
- Role-based user interaction

The prototype should simulate **the full lifecycle of an Industrial Court case** from filing until award publication.

---

# 1. PRODUCT VISION

The **e-Mahkamah Perusahaan (eMP) v2.0** platform will serve as the **central digital justice platform for Industrial Court Malaysia**.

The system must support the **full lifecycle of an industrial dispute case**, including:

- Case Filing
- Case Registration
- Case Allocation
- Hearing & Mention Sessions
- Case Management
- Decision (Award)
- Award Publication
- Legal Reference Search

The platform must support **multiple user groups with role-based experiences**.

The objective is to deliver a **modern digital court platform that improves efficiency, transparency, and accessibility of justice services**.

---

# 2. CORE SYSTEM ACTORS

The system supports **three main actor groups**.

---

# ACTOR GROUP 1 — COURT OFFICER (INTERNAL USERS)

These users manage the **internal operations of the Industrial Court**.

### Roles

| Role | Description |
|-----|-------------|
| YDP | Yang Dipertua Industrial Court |
| Chairman | Judge hearing cases |
| Registrar | Oversees case registration |
| Assistant Registrar | Assists registrar |
| PA | Administrative support |
| Interpreter | Court interpreter |
| UPK | Case registration unit |
| CA Unit | Collective Agreement unit |
| Notice Officer | Issues official notices |
| System Admin | Manages system configuration |

---

# ACTOR GROUP 2 — eFILING USER (EXTERNAL USERS)

These are **external parties interacting with the court**.

| Role | Description |
|-----|-------------|
| Lawyer | Legal representative |
| Claimant | Employee bringing case |
| Respondent | Employer defending case |
| Union Rep | Union representative |

---

# ACTOR GROUP 3 — PUBLIC USER

Users accessing **public information only**.

| Role | Description |
|-----|-------------|
| Public | General public |
| Researcher | Legal researcher |
| Journalist | Media |

Public users mainly access:

- award search
- hearing schedule
- court notices
- practice notes

---

# 3. CORE SYSTEM MODULES

Based on **Lampiran C specification**.

| Module | Purpose |
|------|------|
| Portal eMP | Public facing portal |
| Access Management | Login gateway |
| Notice Management | Notification system |
| eFiling | Case filing system |
| eSebutan | Virtual mention |
| Court Schedule | Hearing schedule |
| Digital Display | Courtroom screen display |
| Smart Award Search | Legal search engine |
| Case Registration | Register new case |
| Case Management | Manage active case |
| Collective Agreement | Manage CA matters |
| Dashboard & Reports | Analytics & reporting |
| System Administration | Manage system settings |

---

# 4. MAIN SYSTEM STORY (CASE LIFECYCLE)

The UI prototype must illustrate the **full story of a case lifecycle**.

Example scenario:

Employee files an unfair dismissal case against employer.

```
Claimant files case
        ↓
eFiling submission
        ↓
Case registered by Registrar
        ↓
Case assigned to Chairman
        ↓
Mention session
        ↓
Hearing session
        ↓
Award issued
        ↓
Award published
        ↓
Public can search the award
```

The prototype must visually demonstrate this **End-to-End case lifecycle**.

---

# 5. MAIN SYSTEM USER FLOW

```
PUBLIC PORTAL
     ↓
LOGIN GATEWAY
     ↓
ROLE SELECTION
     ↓
USER DASHBOARD
     ↓
MODULE ACCESS
```

---

# 6. LOGIN EXPERIENCE

The login interface must match the **role selection screen prototype**.

Available roles:

```
Court Officer
eFiling User
Guest Access
```

### Guest Access

Used for:

- Virtual hearing participation
- eSebutan session
- Temporary access

---

# 7. PUBLIC PORTAL EXPERIENCE

The public portal is the **main entry point to the system**.

### Homepage Components

#### Hero Section

Search functionality:

```
Search by:
- Case number
- Award title
- Keywords
```

---

### Quick Actions

```
File a Document
Join Virtual Court
Practice Notes
Selected Awards
```

---

### e-Services Directory

Card layout for services:

```
Case Management
Collective Agreement
Search Full Awards
Practice Notes
```

---

### Hearings & Judgements

Display daily court schedule.

Example:

```
09:00 AM — Hearing
11:00 AM — Trial
02:30 PM — Mention
```

Each entry includes:

- case title
- court number
- chairman
- case type

---

### Court Notices

Example notices:

```
Practice Note No.1 — Implementation of eMP v2.0

Guidelines for remote attendance during public holidays
```

---

# 8. USER JOURNEY — CLAIMANT (eFiling User)

Scenario: Employee files unfair dismissal case.

### Steps

```
Login
↓
User Dashboard
↓
File New Case
↓
Fill Case Form
↓
Upload Supporting Documents
↓
Submit Filing
↓
Receive Case Number
```

### UI Screens Required

1. Login page  
2. User dashboard  
3. Case filing form  
4. Document upload interface  
5. Submission confirmation  
6. Case tracking screen  

---

# 9. USER JOURNEY — REGISTRAR

Scenario: Registrar processes new filings.

### Steps

```
View New Filing Queue
↓
Review Case Details
↓
Validate Documents
↓
Register Case
↓
Assign Case Number
↓
Forward for Case Allocation
```

### UI Screens

1. Registrar dashboard  
2. Filing review page  
3. Case registration form  
4. Case summary page  

---

# 10. USER JOURNEY — CASE ALLOCATION (YDP)

Scenario: YDP assigns case to chairman.

### Steps

```
Open Allocation Panel
↓
Review System Recommendation
↓
Check Chairman Workload
↓
Assign Case
↓
Confirm Allocation
```

### UI Screens

1. Allocation dashboard  
2. Workload overview  
3. Assignment interface  

---

# 11. USER JOURNEY — CHAIRMAN (JUDGE)

Scenario: Chairman conducts hearing.

### Steps

```
Login
↓
Open Judge Dashboard
↓
View Assigned Cases
↓
Conduct Mention
↓
Conduct Hearing
↓
Upload Award
```

### UI Screens

1. Judge dashboard  
2. Case details  
3. Hearing notes interface  
4. Award upload screen  

---

# 12. USER JOURNEY — PUBLIC USER

Scenario: Public searches award.

### Steps

```
Visit Portal
↓
Search Award
↓
View Case Summary
↓
Download Award
```

---

# 13. SMART AWARD SEARCH

Key feature of the system.

### Search Types

```
Keyword search
Legal concept search
Case reference search
```

Example query:

```
unfair dismissal constructive dismissal
```

Result display:

```
Case title
Court
Chairman
Decision summary
Award PDF
```

---

# 14. SAMPLE DATA FOR PROTOTYPE

Example case data:

### Case 1

```
Case Number:
1/1-1522/25

Case Title:
Tay Hwee Lan v Healthy Vision Sdn Bhd

Chairman:
YA Dato Wan Jeffry Kassim

Court:
Mahkamah 1

Case Type:
Unfair Dismissal

Status:
Hearing
```

---

### Case 2

```
Case Title:
Azman Bin Isa v Technip Energies Malaysia

Case Type:
Unfair Dismissal

Court:
Mahkamah 1
```

---

### Case 3

```
Case Title:
Siti Nurhaliza v Syarikat ABC Sdn Bhd

Case Type:
Employment Termination
```

---

# 15. DASHBOARD COMPONENTS

Internal dashboards should display:

### Case Statistics

```
New cases
Active cases
Cases this month
Pending awards
```

---

### Tasks

```
Cases awaiting mention
Cases awaiting hearing
Cases awaiting award
```

---

### Notifications

```
New filings
Schedule changes
Notice issued
```

---

# 16. COURT SCHEDULE VIEW

Calendar interface.

Modes:

```
Daily
Weekly
Monthly
```

Example schedule entry:

```
09:00 Hearing

Case:
Tay Hwee Lan v Healthy Vision Sdn Bhd

Court:
Mahkamah 1

Chairman:
YA Dato Wan Jeffry Kassim
```

---

# 17. eSEBUTAN INTERFACE

Virtual mention interface.

Layout:

```
Participant list
Chat / conversation
Document sharing
Session log
```

---

# 18. DIGITAL DISPLAY

Courtroom display screens.

Displays:

```
Courtroom number
Current case
Next case
Judge
Time
```

---

# 19. ADMIN MODULE

Admin manages system configuration.

Functions:

```
User management
Role management
System settings
Integration configuration
System logs
```

---

# 20. PROTOTYPE SCREENS REQUIRED

UI team should produce at least **16-20 screens**.

### Public Portal

1. Homepage  
2. Award Search  
3. Hearing Schedule  

---

### Login

4. Role Selection Gateway  

---

### eFiling

5. User Dashboard  
6. Case Filing Form  
7. Document Upload  
8. Case Tracking  

---

### Court Operations

9. Registrar Dashboard  
10. Case Registration  
11. Case Allocation  
12. Judge Dashboard  

---

### Court Activities

13. Hearing Calendar  
14. eSebutan Interface  
15. Digital Display  

---

### Administration

16. Admin Panel  

---

# 21. DESIGN PRINCIPLES

UI must follow:

```
Government-grade professional design
Clean interface
High readability
Fast navigation
Mobile responsive
Accessibility friendly
```

---

# 22. DESIGN STYLE

Recommended design language:

```
Dark hero section
White content cards
Blue accent color
Minimal professional layout
Legal institution theme
```

---

# 23. AI PROTOTYPE GENERATION PROMPT (OPTIONAL)

UI team may use AI design tools with the following prompt:

```
Design a modern government court system dashboard for Industrial Court Malaysia with role-based access, case management, hearing schedule, award search, and filing portal. UI must be professional, minimal, with dark hero section and clean card layout suitable for judiciary systems.
```

---

# FINAL OBJECTIVE

The prototype must demonstrate the **complete Industrial Court digital workflow**.

```
Case Filing
    ↓
Case Management
    ↓
Hearing
    ↓
Award
    ↓
Public Search
```

This ensures the UI prototype fully represents the **end-to-end workflow of the Industrial Court digital system (eMP v2.0)**.

````

Dashboard Analytic eMP

```
# eMP v2.0 Dashboard Analytics Brief
Industrial Court of Malaysia — e-Mahkamah Perusahaan (eMP) v2.0

Purpose  
Dokumen ini menyediakan panduan lengkap kepada team UI/UX, data engineer dan system architect untuk membangunkan modul Dashboard & Analytics bagi sistem eMP v2.0. Dashboard ini akan menyokong pemantauan operasi Mahkamah Perusahaan secara menyeluruh, daripada proses eFiling sehingga kepada pengeluaran Award serta analisis penggunaan sistem.

Dashboard ini juga berfungsi sebagai alat pemantauan prestasi sistem, prestasi operasi mahkamah dan penggunaan platform oleh pengguna dalaman serta pengguna awam.

---

Executive Dashboard

Objective  
Memberikan gambaran keseluruhan prestasi Mahkamah Perusahaan Malaysia secara real-time kepada pihak pengurusan tertinggi seperti YDP dan pengurusan jabatan.

Suggested KPI Cards
Total Active Cases
New Cases This Month
Cases Closed This Month
Backlog Cases
Average Days to Award
Case Resolution Rate

Suggested Metrics
Total Active Cases = count(case where status not closed)
New Cases This Month = count(case where filing_date within current month)
Cases Closed This Month = count(case where award_date within current month)
Backlog Cases = count(case where days_open > 90)
Average Days to Award = avg(award_date - registration_date)
Case Resolution Rate = cases_closed / new_cases

Suggested Charts
Monthly Case Filing Trend
Monthly Case Resolution Trend
Case Distribution by Type
Case Distribution by Chairman
Case Status Distribution

Sample Dashboard Data

Metric | Value
Total Active Cases | 127
New Cases This Month | 18
Cases Closed This Month | 12
Backlog Cases | 23
Average Days to Award | 68 days
Resolution Rate | 0.67

Sample Chart Data (Monthly Filing)

Month | New Cases | Cases Closed
Jan 2026 | 22 | 18
Feb 2026 | 19 | 17
Mar 2026 | 18 | 12

Case Type Distribution

Case Type | Count
Unfair Dismissal | 64
Constructive Dismissal | 21
Collective Agreement | 18
Trade Dispute | 12
Termination of Service | 12

Chairman Workload

Chairman | Active Cases
YA Dato Wan Jeffry Kassim | 32
YA Tuan Amrik Singh | 24
YA Puan Rusita Md Lazim | 21
YA Tuan Zulhelmy Hasan | 18
YA Dato Syed Noh Said | 17
YA Puan Kartini Hashim | 15

---

Court Operations Dashboard

Objective  
Membantu pegawai mahkamah seperti Registrar dan Assistant Registrar memantau operasi harian.

Suggested KPI Cards

New Filings Today  
Cases Pending Registration  
Cases Pending Allocation  
Mentions Today  
Hearings Today  
Notices Pending

Sample Data

Metric | Value
New Filings Today | 9
Pending Registration | 4
Pending Allocation | 3
Mentions Today | 6
Hearings Today | 8
Notices Pending | 2

Sample Filing Queue

Filing ID | Submitted By | Case Type | Date | Status
F1001 | Tay Hwee Lan | Unfair Dismissal | 2026-03-05 | Pending Review
F1002 | Azman Bin Isa | Unfair Dismissal | 2026-03-05 | Pending Review
F1003 | Ravi Kumar | Constructive Dismissal | 2026-03-05 | Pending Review
F1004 | Ahmad Faiz | Termination | 2026-03-05 | Approved

Sample Hearing Schedule

Time | Case | Courtroom | Chairman
09:00 | Tay Hwee Lan v Healthy Vision | Mahkamah 1 | YA Dato Wan Jeffry Kassim
11:00 | Azman Bin Isa v Technip Energies | Mahkamah 1 | YA Dato Wan Jeffry Kassim
14:30 | Siti Nurhaliza v ABC Sdn Bhd | Mahkamah 4 | YA Tuan Amrik Singh
09:30 | Kesatuan Sekerja v Kilang Automotif Jaya | Mahkamah 2 | YA Puan Rusita Md Lazim

---

Chairman Dashboard

Objective  
Memberikan paparan khusus kepada pengerusi mahkamah untuk memantau kes yang ditugaskan kepada mereka.

Suggested KPI Cards

Assigned Cases  
Hearings This Week  
Mentions This Week  
Awards Pending  
Cases Closed This Month

Sample Data

Metric | Value
Assigned Cases | 28
Hearings This Week | 6
Mentions This Week | 4
Awards Pending | 3
Cases Closed This Month | 5

Assigned Case List

Case Number | Case Title | Status | Hearing Date
1/1-1522/25 | Tay Hwee Lan v Healthy Vision | Hearing | 12 Mar 2026
1/1-1079/25 | Azman Bin Isa v Technip Energies | Trial | 12 Mar 2026
4/4-2024/25 | Siti Nurhaliza v ABC Sdn Bhd | Mention | 14 Mar 2026
2/2-3041/25 | Kesatuan Sekerja v Kilang Automotif | Hearing | 15 Mar 2026

---

Award Analytics Dashboard

Objective  
Menganalisis penggunaan modul carian Award dan penerbitan keputusan kes.

Suggested KPI Cards

Total Awards Published  
Awards Published This Year  
Search Queries Today  
Top Downloaded Award  
Search Success Rate

Sample Data

Metric | Value
Total Awards Published | 8421
Awards Published 2026 | 312
Search Queries Today | 924
Search Success Rate | 92%
Top Downloaded Award | Sarah Lee v Bintang Retail Group

Award Download Statistics

Award Title | Chairman | Downloads
Sarah Lee v Bintang Retail Group | YA Dato Syed Noh Said | 284
Harun v Maju Tech | YA Tuan Amrik Singh | 233
Noraini v Apex Global | YA Dato Wan Jeffry Kassim | 187
Raj Kumar v Delta Freight | YA Tuan Zulhelmy Hasan | 129

Top Search Keywords

Keyword | Searches
unfair dismissal | 412
constructive dismissal | 238
collective agreement | 179
trade dispute | 95

---

Integration Monitoring Dashboard

Objective  
Memantau transaksi integrasi sistem seperti MyDigital ID dan JPPM.

Suggested KPI Cards

API Success Rate  
Failed Transactions  
Authentication Success Rate  
Average API Response Time  
Retry Queue

Sample Data

Metric | Value
API Success Rate | 97.2%
Failed Transactions | 14
Authentication Success Rate | 99.1%
Average Response Time | 820 ms
Retry Queue | 5

Integration Log

Txn ID | System | Type | Status | Response Time
I3001 | JPPM | Case Sync | Success | 842 ms
I3002 | JPPM | Case Sync | Success | 921 ms
I3003 | MyDigital ID | Authentication | Success | 530 ms
I3004 | MyDigital ID | Authentication | Failed | 2200 ms
I3005 | JPPM | Case Sync | Failed | 4100 ms

---

System Usage Dashboard

Objective  
Menilai tahap penggunaan sistem oleh pelbagai jenis pengguna.

Suggested KPI Cards

Daily Active Users  
Monthly Active Users  
Total Logins Today  
Most Used Module  
Average Session Duration

Sample Data

Metric | Value
Daily Active Users | 376
Monthly Active Users | 1242
Logins Today | 182
Most Used Module | eFiling
Average Session Duration | 18 minutes

Usage by Role

Role | Active Users
Registrar | 12
Chairman | 8
Lawyers | 32
Claimants | 45
Public Users | 280

Module Usage

Module | Usage Count
eFiling | 142
Case Management | 98
Award Search | 312
Hearing Schedule | 74
Notice Management | 53

---

Sample Case Dataset

Case Number | Case Title | Case Type | Chairman | Court | Filing Date | Status
1/1-1522/25 | Tay Hwee Lan v Healthy Vision Sdn Bhd | Unfair Dismissal | YA Dato Wan Jeffry Kassim | Mahkamah 1 | 2026-01-05 | Hearing
1/1-1079/25 | Azman Bin Isa v Technip Energies | Unfair Dismissal | YA Dato Wan Jeffry Kassim | Mahkamah 1 | 2026-01-11 | Trial
4/4-2024/25 | Siti Nurhaliza v Syarikat ABC | Termination | YA Tuan Amrik Singh | Mahkamah 4 | 2026-02-01 | Mention
2/2-3041/25 | Kesatuan Sekerja v Kilang Automotif Jaya | Collective Agreement | YA Puan Rusita Md Lazim | Mahkamah 2 | 2026-01-22 | Hearing
5/5-1120/25 | Ahmad Faiz v Global Tech Solutions | Unfair Dismissal | YA Tuan Zulhelmy Hasan | Mahkamah 5 | 2026-02-10 | Mention

---

Suggested Dashboard Visual Components

KPI Cards for headline metrics  
Line charts for trends over time  
Bar charts for comparison by chairman or court  
Donut charts for case status distribution  
Calendar view for hearing schedule  
Data tables for drill-down details

---

AI Prompt for Generating Demo Data

Generate realistic Malaysian Industrial Court operational data for a digital court platform called eMP v2.0.

Requirements:
- Output CSV datasets
- Cases: 150 rows
- Hearings: 300 rows
- Awards: 80 rows
- Filings: 200 rows
- Notices: 250 rows
- Integration logs: 500 rows
- User usage stats: 90 rows

Use realistic Malaysian names, company names, unions, chairman titles and courtroom labels.

Include case types:
Unfair Dismissal
Constructive Dismissal
Collective Agreement
Trade Dispute
Termination of Service

Include realistic case statuses:
Filing Review
Registered
Allocation Pending
Mention
Hearing
Award Pending
Award Published

Dates must be between Jan 2026 and Jun 2026.

Ensure relationships:
hearings reference case numbers  
awards reference case numbers  
notices reference case numbers  
integration logs simulate JPPM and MyDigital ID activity

Ensure the dataset produces meaningful charts for dashboard prototypes.

---

End of Dashboard Analytics Brief

```

**DASHBOARD FEEDBACK**

![][image1]

```
# eMP v2.0 Analytics & Reporting Dashboard Specification
Mahkamah Perusahaan Malaysia (Industrial Court)

Dokumen ini menyediakan **brief analitik dan laporan dashboard** untuk sistem eMP v2.0. Ia direka untuk membantu **pengurusan mahkamah, pegawai mahkamah dan pengerusi mahkamah** memahami prestasi operasi, aliran kes, kecekapan perbicaraan serta trend pertikaian pekerjaan di Malaysia.

The analytics module must support **year-based reporting**, **trend analysis**, and **interactive filtering**.

Filtering requirement:
- Year (2019 – 2026)
- Court Location
- Case Type
- Chairman
- Case Status

---

# Dashboard Category Structure

The analytics dashboard will contain the following sections:

1. Case Registration & Resolution
2. Case Type Analysis
3. Case Lifecycle Performance
4. Court Performance
5. Chairman Performance
6. Hearing Performance
7. Pleading & Document Analytics
8. Award Analytics
9. Operational Risk Monitoring
10. Historical Trend Analysis

---

# 1. Case Registration and Resolution of Unfair Dismissal Cases by Year  
# Pendaftaran dan Penyelesaian Kes Pembuangan Kerja Mengikut Tahun

Chart Type  
Bar Chart

Description  
This dashboard shows the number of unfair dismissal cases registered and resolved annually.

Data Range  
2019 – 2026

Sample Data

| Year | Cases Registered | Cases Resolved |
|-----|-----------------|---------------|
| 2019 | 820 | 745 |
| 2020 | 756 | 689 |
| 2021 | 912 | 801 |
| 2022 | 1,034 | 912 |
| 2023 | 1,148 | 1,021 |
| 2024 | 1,206 | 1,102 |
| 2025 | 1,278 | 1,156 |
| 2026 | 1,321 | 1,188 |

Insight  
Allows court management to track backlog trends and dispute growth.

---

# 2. Types of Unfair Dismissal Cases Resolved (2019 – 2026)  
# Jenis Kes Pembuangan Kerja Yang Diselesaikan Mengikut Tahun (2019 – 2026)

Chart Type  
Stacked Bar Chart

Description  
Displays the breakdown of types of unfair dismissal cases resolved each year.

Sample Data

| Year | Direct Dismissal | Constructive Dismissal | Retrenchment | Termination Dispute |
|----|----|----|----|----|
| 2019 | 412 | 126 | 109 | 98 |
| 2020 | 378 | 118 | 102 | 91 |
| 2021 | 451 | 140 | 110 | 100 |
| 2022 | 512 | 162 | 123 | 115 |
| 2023 | 548 | 170 | 138 | 121 |
| 2024 | 572 | 184 | 142 | 129 |
| 2025 | 603 | 195 | 150 | 140 |
| 2026 | 620 | 201 | 159 | 152 |

Insight  
Helps identify dispute patterns and economic labour trends.

---

# 3. Total Cases Registered by Case Category per Year  
# Jumlah Kes Didaftarkan Mengikut Kategori Kes Setiap Tahun

Chart Type  
Bar Chart

| Year | Unfair Dismissal | Collective Agreement | Trade Dispute | Union Recognition |
|----|----|----|----|----|
| 2019 | 820 | 84 | 63 | 22 |
| 2020 | 756 | 72 | 58 | 19 |
| 2021 | 912 | 91 | 71 | 24 |
| 2022 | 1,034 | 108 | 83 | 29 |
| 2023 | 1,148 | 122 | 95 | 31 |
| 2024 | 1,206 | 131 | 102 | 36 |
| 2025 | 1,278 | 142 | 114 | 40 |
| 2026 | 1,321 | 148 | 121 | 45 |

---

# 4. Average Case Duration by Year  
# Tempoh Purata Penyelesaian Kes Mengikut Tahun

Chart Type  
Line Chart

| Year | Average Case Duration (Months) |
|----|----|
| 2019 | 10.8 |
| 2020 | 10.5 |
| 2021 | 10.2 |
| 2022 | 9.8 |
| 2023 | 9.5 |
| 2024 | 9.2 |
| 2025 | 9.1 |
| 2026 | 8.9 |

Insight  
Shows improvement in judicial efficiency.

---

# 5. Court Case Distribution by Location  
# Taburan Kes Mahkamah Mengikut Lokasi

Chart Type  
Horizontal Bar Chart

| Court Location | Active Cases |
|----|----|
| Kuala Lumpur | 284 |
| Selangor | 312 |
| Johor | 176 |
| Penang | 142 |
| Perak | 118 |
| Sabah | 95 |
| Sarawak | 82 |

---

# 6. Chairman Workload Analysis  
# Analisis Beban Kerja Pengerusi Mahkamah

Chart Type  
Bar Chart

| Chairman | Active Cases | Awards Issued |
|----|----|----|
| Y.A. Dato’ Wan Jeffry Bin Kassim | 121 | 9 |
| Y.A. Tuan Amrik Singh | 112 | 11 |
| Y.A. Tuan Zuhlhelmy Bin Hasan | 96 | 8 |
| Y.A. Dato’ Syed Noh Bin Said | 101 | 10 |

Insight  
Helps balance case distribution.

---

# 7. Hearing Utilisation Rate by Year  
# Kadar Penggunaan Sesi Perbicaraan Mengikut Tahun

Chart Type  
Line Chart

| Year | Hearings Scheduled | Hearings Completed |
|----|----|----|
| 2019 | 1,122 | 1,051 |
| 2020 | 1,034 | 970 |
| 2021 | 1,178 | 1,112 |
| 2022 | 1,245 | 1,191 |
| 2023 | 1,328 | 1,267 |
| 2024 | 1,401 | 1,344 |
| 2025 | 1,468 | 1,420 |
| 2026 | 1,512 | 1,468 |

---

# 8. Pleading Filing Performance  
# Prestasi Pemfailan Pleading

Chart Type  
Stacked Bar Chart

| Year | SOC Filed | SIR Filed | Rejoinder Filed |
|----|----|----|----|
| 2019 | 720 | 694 | 412 |
| 2020 | 688 | 642 | 398 |
| 2021 | 821 | 788 | 456 |
| 2022 | 901 | 867 | 502 |
| 2023 | 982 | 942 | 540 |
| 2024 | 1,041 | 998 | 590 |
| 2025 | 1,102 | 1,051 | 620 |
| 2026 | 1,158 | 1,108 | 648 |

---

# 9. Award Decision Outcome Distribution  
# Taburan Keputusan Award

Chart Type  
Pie Chart

| Award Outcome | Cases |
|----|----|
| Claim Dismissed | 21 |
| Reinstatement | 19 |
| Compensation | 16 |
| Settlement Recorded | 8 |

---

# 10. Backlog Case Monitoring  
# Pemantauan Kes Tertunggak

Chart Type  
Bar Chart

| Year | Backlog Cases |
|----|----|
| 2019 | 84 |
| 2020 | 91 |
| 2021 | 73 |
| 2022 | 61 |
| 2023 | 54 |
| 2024 | 48 |
| 2025 | 42 |
| 2026 | 39 |

---

# Suggested Dashboard Layout

Top KPI Section

Total Active Cases  
New Cases (Month)  
Cases Closed (Month)  
Backlog Cases  

Middle Section

Monthly Case Trend (Bar Chart)  
Case Type Distribution (Stacked Bar Chart)

Lower Section

Chairman Performance (Bar Chart)  
Case Lifecycle Trend (Line Chart)

Bottom Section

Award Analytics  
Operational Risk Monitoring  

---

# AI Data Generation Prompt for Prototype

Use the following prompt in Antigravity or Claude to generate sample dataset.

Generate a dataset of Industrial Court Malaysia cases.

Fields required:

Case_ID  
Case_Type  
Court_Location  
Chairman_Name  
Case_Status  
Date_Filed  
Date_Mention  
Date_Hearing  
Date_Award  
Award_Outcome  
Case_Duration_Months  
Documents_Count  

Generate 2000 records between years 2019 and 2026.

Distribution rules:

70 percent Unfair Dismissal  
10 percent Constructive Dismissal  
8 percent Collective Agreement  
7 percent Trade Dispute  
5 percent Union Recognition

Average case duration between 8 and 11 months.

Include realistic Malaysian company names and chairman names.

Example record

Case_ID IC-KL-2025-01452  
Case_Type Unfair Dismissal  
Court_Location Kuala Lumpur  
Chairman_Name Y.A. Dato Wan Jeffry Bin Kassim  
Case_Status Hearing Scheduled  
Date_Filed 2025-01-12  
Date_Mention 2025-02-05  
Date_Hearing 2025-06-18  
Date_Award NULL  
Award_Outcome NULL  
Case_Duration_Months 9.4  
Documents_Count 16

---

This analytics structure ensures eMP v2.0 supports:

Operational monitoring  
Judicial efficiency tracking  
Labour dispute trend analysis  
Court management decision support

```

**Feedback M10: Pengurusan kes**

![][image2]

![][image3]

````
# 📘 eMP v2.0 – MODUL PENGURUSAN KES (M10)
### UI/UX PROTOTYPE BRIEF (ANTIGRAVITY / GEMINI READY)

---

# 🧭 1. OVERVIEW

Modul Pengurusan Kes (M10) merupakan modul teras dalam sistem eMP v2.0 yang mengurus keseluruhan kitaran hayat kes bermula daripada pendaftaran sehingga penutupan kes (award).

Prototype perlu memaparkan:
- Aliran kes end-to-end (lifecycle)
- Paparan berpusat (single source of truth)
- Interaksi antara modul (e-Filing, Pendaftaran, e-Sebutan, Jadual, Award)

---

# 👥 2. USER ROLES

```
Internal:
- YDP
- Chairman
- Registrar / Assistant Registrar
- Pegawai Mahkamah

External:
- Claimant
- Respondent
- Lawyer
- Union Representative
```

---

# 🔄 3. USER FLOW

```
Login
 ↓
Dashboard / Workspace
 ↓
Case List
 ↓
Case Detail
 ↓
Manage Case (Docs / Timeline / Hearing)
 ↓
Hearing / Mention / Mediation
 ↓
Award
 ↓
Case Closed
```

---

# 🧩 4. SCREEN 1 – CASE LIST VIEW

## 🎯 Objective
Paparan senarai semua kes untuk pengguna

## 🧱 UI COMPONENTS

```
- Search Bar (Case No / Name / Keyword)
- Filters:
  - Year
  - Court
  - Status
  - Case Type
- Case Table
- Quick Action Button
```

## 📊 SAMPLE DATA

```json
[
  {
    "case_number": "1/1-1522/25",
    "case_title": "Tay Hwee Lan v Healthy Vision Sdn Bhd",
    "case_type": "Unfair Dismissal",
    "status": "Hearing",
    "court": "Mahkamah 1",
    "chairman": "YA Dato Wan Jeffry Kassim",
    "next_action": "Join Hearing",
    "hearing_date": "2026-03-12"
  },
  {
    "case_number": "1/1-1079/25",
    "case_title": "Azman Bin Isa v Technip Energies",
    "case_type": "Unfair Dismissal",
    "status": "Trial",
    "court": "Mahkamah 1",
    "chairman": "YA Dato Wan Jeffry Kassim",
    "next_action": "Upload Documents",
    "hearing_date": "2026-03-20"
  },
  {
    "case_number": "4/4-2024/25",
    "case_title": "Siti Nurhaliza v ABC Sdn Bhd",
    "case_type": "Termination",
    "status": "Mention",
    "court": "Mahkamah 4",
    "chairman": "YA Tuan Amrik Singh",
    "next_action": "Attend Mention",
    "hearing_date": "2026-04-02"
  }
]
```

---

# 🧩 5. SCREEN 2 – CASE DETAIL VIEW (CORE)

## 🎯 Objective
Paparan penuh satu kes (central control panel)

## 🧱 LAYOUT

```
HEADER:
- Case Number
- Case Title
- Status Badge
- Chairman
- Court

TABS:
- Overview
- Parties
- Timeline
- Documents
- Hearings
- Notes
- Award
```

---

# 🧩 6. TAB: OVERVIEW

## 📊 SAMPLE DATA

```json
{
  "case_number": "1/1-1522/25",
  "case_title": "Tay Hwee Lan v Healthy Vision Sdn Bhd",
  "case_type": "Unfair Dismissal",
  "status": "Hearing",
  "filing_date": "2026-01-05",
  "assigned_date": "2026-01-12",
  "court": "Mahkamah 1",
  "chairman": "YA Dato Wan Jeffry Kassim"
}
```

---

# 🧩 7. TAB: PARTIES

## 📊 SAMPLE DATA

```json
{
  "claimant": "Tay Hwee Lan",
  "respondent": "Healthy Vision Sdn Bhd",
  "claimant_lawyer": "Messrs Lee & Co",
  "respondent_lawyer": "Messrs Tan & Partners"
}
```

---

# 🧩 8. TAB: TIMELINE (CRITICAL)

## 🎯 Design:
Vertical timeline / stepper UI

## 📊 SAMPLE DATA

```json
[
  {"event": "Filing Submitted", "date": "2026-01-05", "status": "completed"},
  {"event": "Case Registered", "date": "2026-01-10", "status": "completed"},
  {"event": "Case Assigned", "date": "2026-01-12", "status": "completed"},
  {"event": "Mention", "date": "2026-02-15", "status": "completed"},
  {"event": "Hearing", "date": "2026-03-12", "status": "active"},
  {"event": "Award", "date": null, "status": "pending"}
]
```

---

# 🧩 9. TAB: DOCUMENTS

## 🎯 Features:
- Upload
- Download
- Version tracking

## 📊 SAMPLE DATA

```json
[
  {
    "name": "Statement of Claim",
    "type": "PDF",
    "uploaded_by": "Claimant",
    "date": "2026-01-05"
  },
  {
    "name": "Statement in Reply",
    "type": "PDF",
    "uploaded_by": "Respondent",
    "date": "2026-01-20"
  },
  {
    "name": "Evidence Bundle",
    "type": "PDF",
    "uploaded_by": "Lawyer",
    "date": "2026-03-01"
  }
]
```

---

# 🧩 10. TAB: HEARINGS / MENTIONS

## 📊 SAMPLE DATA

```json
[
  {
    "date": "2026-02-15",
    "type": "Mention",
    "status": "Completed",
    "action": "View Summary"
  },
  {
    "date": "2026-03-12",
    "type": "Hearing",
    "status": "Upcoming",
    "action": "Join Session"
  }
]
```

---

# 🧩 11. TAB: NOTES / PROCEEDINGS

## 📊 SAMPLE DATA

```json
[
  {
    "author": "Chairman",
    "note": "Parties requested additional time to submit documents.",
    "date": "2026-02-15"
  },
  {
    "author": "Registrar",
    "note": "Documents verified and accepted.",
    "date": "2026-02-20"
  }
]
```

---

# 🧩 12. TAB: AWARD

## 📊 SAMPLE DATA

```json
{
  "award_status": "Pending",
  "decision": null,
  "uploaded_by": null,
  "date": null
}
```

---

# ⚙️ 13. ROLE-BASED ACTIONS

## Chairman:
- Add Notes
- Upload Award

## Registrar:
- Validate Documents
- Update Status

## External User:
- Upload Documents
- View Case Status

---

# 🔗 14. MODULE INTEGRATION

```
e-Filing → Input kes
Pendaftaran Kes → Generate case number
Pengurusan Kes → Manage lifecycle
e-Sebutan → Hearing session
Jadual Mahkamah → Scheduling
Award → Final decision
Dashboard → Analytics
```

---

# 🎨 15. DESIGN PRINCIPLES

- Single Case = Single View (no fragmentation)
- Timeline-driven UI
- Action-based UX (Next Action)
- Role-Based Access (RBAC)
- Mobile-first (tablet friendly)
- Clean legal UI (minimal clutter)

---

# 🚀 16. PROTOTYPE INSTRUCTION (ANTIGRAVITY)

Gunakan struktur berikut:

```
Create a case management system UI with:

- Case list table with filters
- Case detail page with tabs:
  Overview, Parties, Timeline, Documents, Hearings, Notes, Award
- Vertical timeline view
- Role-based action buttons
- Clean, modern government UI
- Blue/white theme (official system)
- Responsive layout (desktop + tablet)
```

---

# 🔥 KEY INSIGHT (FOR DESIGN TEAM)

Ini bukan sekadar UI:
👉 Ini adalah **Case Lifecycle System**

Focus:
- bukan list sahaja
- tetapi progression + action + decision

Outcome:
👉 UI nampak real system, bukan mockup kosong
```

````

FEEDBACK M5 \- eSebutan

````
# 📘 eMP v2.0 – MODUL e-SEBUTAN & MEDIASI (ADR)
### UI/UX PROTOTYPE BRIEF (WITH USER STORY & SAMPLE DATA)

---

# 🧭 1. OVERVIEW

Modul e-Sebutan & Mediasi (ADR) membolehkan pelaksanaan prosiding mahkamah secara dalam talian termasuk sesi sebutan, perbicaraan dan rundingan damai. Modul ini perlu menyokong kehadiran pelbagai pihak termasuk **Lawyer (Peguam)** sebagai aktor utama dalam prosiding.

Prototype perlu menunjukkan:
- aliran penuh sesi mahkamah digital  
- interaksi pelbagai peranan (multi-actor interaction)  
- kawalan sesi yang tersusun (bukan sekadar video call biasa)  

---

# 👥 2. USER ROLES

```
Internal:
- Chairman (Pengerusi)
- Registrar / Pegawai Mahkamah

External:
- Claimant (Pekerja)
- Respondent (Majikan)
- Lawyer (Peguam)
```

---

# 🎯 3. USER STORY (SENARIO REAL)

## 📌 Senario: Kes Pembuangan Kerja Tidak Adil

### 👤 Perspektif Lawyer (Claimant)

```
Sebagai seorang peguam kepada pihak penuntut,
Saya ingin menyertai sesi e-Sebutan secara dalam talian,
Supaya saya boleh mewakili anak guam saya tanpa perlu hadir secara fizikal ke mahkamah.
```

### 👨‍⚖️ Perspektif Chairman

```
Sebagai Pengerusi Mahkamah,
Saya ingin mengawal sesi e-Sebutan,
Supaya prosiding berjalan secara tersusun dan semua pihak dapat didengar.
```

### 🏢 Perspektif Respondent

```
Sebagai wakil majikan,
Saya ingin menyertai sesi sebutan dan rundingan damai,
Supaya kes dapat diselesaikan tanpa perlu melalui perbicaraan penuh.
```

---

# 🔄 4. END-TO-END FLOW

```
Notifikasi Sesi
 ↓
Login Sistem
 ↓
Pilih Kes
 ↓
Paparan Sesi Akan Datang
 ↓
Masuk Waiting Room
 ↓
Diluluskan oleh Chairman
 ↓
Masuk Live Session
 ↓
(Opsyen) Masuk Mediation Room
 ↓
Sesi Tamat
 ↓
Log Sesi Direkodkan
```

---

# 🧩 5. SCREEN 1 – UPCOMING SESSION

## 🎯 Objective
Paparan sesi yang dijadualkan

---

## 🧱 COMPONENTS

```
- Case Info
- Session Date & Time
- Status Badge
- Join Button
```

---

## 📊 SAMPLE DATA

```json
{
  "case_number": "1/1-1522/25",
  "case_title": "Tay Hwee Lan v Healthy Vision Sdn Bhd",
  "session_type": "Hearing",
  "date": "2026-03-12",
  "time": "10:00 AM",
  "status": "Upcoming",
  "court": "Mahkamah 1"
}
```

---

# 🧩 6. SCREEN 2 – WAITING ROOM

## 🎯 Objective
Ruang menunggu sebelum masuk sesi

---

## 🧱 COMPONENTS

```
- Countdown Timer
- Participant List
- Status: Waiting Approval
- Button: Request to Join
```

---

## 📊 SAMPLE DATA

```json
{
  "session_id": "ESB-2026-001",
  "status": "Waiting",
  "participants": [
    {"name": "YA Dato Wan Jeffry Kassim", "role": "Chairman"},
    {"name": "Tay Hwee Lan", "role": "Claimant"},
    {"name": "Messrs Lee & Co", "role": "Lawyer"},
    {"name": "Healthy Vision Sdn Bhd", "role": "Respondent"}
  ]
}
```

---

# 🧩 7. SCREEN 3 – LIVE SESSION

## 🎯 Objective
Paparan utama prosiding

---

## 🧱 COMPONENTS

```
- Video Panel
- Participant List (Role-based)
- Chat Panel
- Session Control (Mute / Raise Hand)
```

---

## 📊 SAMPLE DATA

```json
{
  "status": "Live",
  "participants": [
    {"name": "Chairman", "status": "Speaking"},
    {"name": "Lawyer", "status": "Listening"},
    {"name": "Respondent", "status": "Listening"}
  ]
}
```

---

# 🧩 8. SCREEN 4 – MEDIATION ROOM (ADR)

## 🎯 Objective
Ruang rundingan damai

---

## 🧱 COMPONENTS

```
- Private Video Room
- Restricted Participants
- Chat & Notes
```

---

## 📊 SAMPLE DATA

```json
{
  "room": "Mediation",
  "status": "In Progress",
  "participants": [
    {"name": "Claimant"},
    {"name": "Respondent"},
    {"name": "Chairman"}
  ]
}
```

---

# 🧩 9. SCREEN 5 – SESSION LOG

## 🎯 Objective
Rekod sesi

---

## 📊 SAMPLE DATA

```json
[
  {
    "date": "2026-02-15",
    "type": "Mention",
    "status": "Completed",
    "summary": "Case proceed to hearing"
  },
  {
    "date": "2026-03-12",
    "type": "Hearing",
    "status": "Completed",
    "summary": "Evidence submitted"
  }
]
```

---

# ⚙️ 10. ROLE-BASED ACTIONS

## Chairman:
- Approve entry
- Start / End session
- Move to mediation

## Registrar:
- Monitor session
- Record notes

## Lawyer:
- Join session
- Represent client
- Participate in discussion

## Claimant / Respondent:
- Join session
- Engage in mediation

---

# 🔗 11. INTEGRATION

```
Case Management → case reference
Court Schedule → session timing
Notification → reminders
Document Module → reference docs
```

---

# 🎨 12. DESIGN PRINCIPLES

- Courtroom-style UI (formal)
- Role clearly visible
- Structured interaction (not free-form)
- Minimal clutter
- Tablet-friendly

---

# 🚀 13. ANTIGRAVITY PROMPT

```
Design a virtual court hearing system with:

- Role-based participants (Chairman, Lawyer, Claimant, Respondent)
- Waiting room with approval flow
- Live session interface (video + chat)
- Mediation room (private session)
- Session history log
- Clean government UI
- Responsive (desktop + tablet)
```

---

# 🔥 KEY INSIGHT

👉 Ini bukan Zoom / Google Meet

👉 Ini:
**Structured Virtual Court System**

Focus:
- controlled interaction
- legal workflow
- role-based authority

Outcome:
👉 Prototype nampak real mahkamah digital system

````

# **M10 \- Modul Pengurusan Award apart of Pengurusan kes lifecycle.** 

````
# 📘 eMP v2.0 – MODUL PENGURUSAN AWARD
### UI/UX PROTOTYPE BRIEF (TENDER-ALIGNED + SAMPLE DATA)

---

# 🧭 1. OVERVIEW

Modul Pengurusan Award menyokong proses penyediaan, semakan, kelulusan dan penerbitan keputusan kes (award) dalam sistem eMP v2.0. Modul ini merupakan peringkat akhir dalam kitaran hayat kes selepas prosiding selesai.

Modul ini mesti menunjukkan bahawa:
- award adalah sebahagian daripada lifecycle kes
- keputusan disediakan oleh Chairman
- melalui proses semakan sebelum diterbitkan
- dan akhirnya boleh dicapai melalui modul Carian Pintar Award

---

# 🏷️ 2. MAPPING MODUL (TENDER)

```
Lifecycle:
e-Filing → Pendaftaran → M10 Pengurusan Kes → e-Sebutan → Pengurusan Award → Carian Award
```

👉 Modul berkaitan:
- M10 Pengurusan Kes
- e-Sebutan
- Carian Pintar Award
- Dashboard & Laporan

---

# 👥 3. ACTORS

## Internal
- Chairman / YDP (Primary Decision Maker)
- Registrar / Pegawai Mahkamah

## External (View Only)
- Lawyer
- Claimant
- Respondent
- Public User

---

# 🎯 4. USER STORY

## Chairman
Sebagai Pengerusi Mahkamah,  
Saya ingin menyediakan dan meluluskan award,  
Supaya keputusan kes direkodkan secara rasmi.

## Registrar
Sebagai pegawai mahkamah,  
Saya ingin menyemak dan mengurus status award,  
Supaya penerbitan keputusan adalah teratur.

## Public User
Sebagai pengguna awam,  
Saya ingin mencari dan membaca award,  
Supaya saya boleh merujuk kes terdahulu.

---

# 🔄 5. PROCESS FLOW

```
Kes selesai (Hearing Completed)
 ↓
Chairman buka Case Detail
 ↓
Klik "Create Award"
 ↓
Draft Award
 ↓
Semakan (optional)
 ↓
Approve Award
 ↓
Publish Award
 ↓
Indexed ke Carian Pintar Award
```

---

# 🧭 6. UI FLOW (DALAM PROTOTYPE)

```
Dashboard (Chairman)
 ↓
Assigned Cases
 ↓
Case Detail Page
 ↓
Tab: "Award"
 ↓
Award Workspace
```

---

# 🧩 7. SCREEN BREAKDOWN

---

## 🧩 SCREEN 1 – CASE DETAIL (READY FOR AWARD)

### UI Components
- Case Header
- Status: "Ready for Award"
- Timeline (Completed Hearing)
- Button: "Create Award"

### Sample Data

```json
{
  "case_number": "1/1-1522/25",
  "case_title": "Tay Hwee Lan v Healthy Vision Sdn Bhd",
  "case_type": "Unfair Dismissal",
  "court": "Mahkamah 1",
  "chairman": "YA Dato Wan Jeffry Kassim",
  "status": "Ready for Award",
  "hearing_completed_date": "2026-03-12"
}
```

---

## 🧩 SCREEN 2 – AWARD DRAFT WORKSPACE

### UI Components

```
LEFT PANEL:
- Case Info Summary
- Timeline

MAIN PANEL:
- Award Title
- Decision Summary
- Award Outcome Dropdown
- Rich Text Editor (optional)

RIGHT PANEL:
- Metadata
- Status
```

### Award Outcome Options

- Dismissed
- Reinstatement
- Compensation
- Settlement
- Other Order

---

### Sample Data

```json
{
  "award_id": "TEMP-001",
  "case_number": "1/1-1522/25",
  "award_status": "Draft",
  "award_title": "Award for Unfair Dismissal Case",
  "decision_summary": "Mahkamah mendapati pembuangan kerja adalah tanpa sebab yang adil.",
  "award_outcome": "Compensation",
  "award_date": "2026-03-25",
  "chairman": "YA Dato Wan Jeffry Kassim"
}
```

---

## 🧩 SCREEN 3 – REVIEW & APPROVAL

### UI Components

```
- Award Summary Card
- Decision Outcome
- Uploaded Document Preview
- Status Badge
- Approve Button
- Return to Draft Button
```

---

### Sample Data

```json
{
  "case_number": "1/1-1522/25",
  "award_status": "Under Review",
  "decision_summary": "Dismissal without just cause",
  "award_outcome": "Compensation",
  "review_status": "Ready for Approval"
}
```

---

## 🧩 SCREEN 4 – AWARD PUBLISHED

### UI Components

```
- Success Banner
- Published Date
- Download Award Button
- Link to Case
- Link to Award Search
```

---

### Sample Data

```json
{
  "award_id": "AW-2026-00125",
  "case_number": "1/1-1522/25",
  "award_status": "Published",
  "published_date": "2026-03-26",
  "award_outcome": "Compensation",
  "document_url": "/awards/AW-2026-00125.pdf"
}
```

---

## 🧩 SCREEN 5 – AWARD IN CASE TIMELINE

### UI Components

```
- Timeline
- Event: Award Published
- Download Button
```

---

### Sample Timeline

```json
[
  {"event": "Filing Submitted", "date": "2026-01-05"},
  {"event": "Case Registered", "date": "2026-01-10"},
  {"event": "Hearing Completed", "date": "2026-03-12"},
  {"event": "Award Published", "date": "2026-03-26"}
]
```

---

# 📊 8. AWARD LIST (FOR SEARCH MODULE)

```json
[
  {
    "award_id": "AW-2026-00125",
    "case_number": "1/1-1522/25",
    "title": "Tay Hwee Lan v Healthy Vision",
    "year": 2026,
    "outcome": "Compensation"
  },
  {
    "award_id": "AW-2026-00130",
    "case_number": "1/1-1079/25",
    "title": "Azman v Technip",
    "year": 2026,
    "outcome": "Dismissed"
  }
]
```

---

# ⚙️ 9. ROLE ACTION

| Role | Action |
|-----|-------|
| Chairman | Create, edit, approve award |
| Registrar | Assist, validate, manage |
| User | View published award only |

---

# 🔗 10. INTEGRATION

```
M10 → Case lifecycle
e-Sebutan → Hearing completion
Award → Final output
Search → Repository
Dashboard → KPI
```

---

# 🎨 11. DESIGN PRINCIPLES

- Clean legal UI
- Document-first design
- Strong status visibility
- Minimal distraction
- Tablet-friendly

---

# 🚀 12. ANTIGRAVITY PROMPT

```
Design an Industrial Court award management system with:

- Case-based award drafting
- Decision summary input
- Approval workflow
- Published award view
- Clean government UI
- Professional legal design
```

---

# 🔥 KEY MESSAGE

👉 Ini bukan “upload PDF”

👉 Ini:
**Structured Court Decision Workflow**

👉 Prototype mesti tunjuk:
- authority
- process
- traceability

````

# **M8 \- Carian Pintar Award.**

````
# 📘 eMP v2.0 – MODUL CARIAN PINTAR AWARD
### UI/UX PROTOTYPE BRIEF (END-TO-END + SAMPLE DATA)

---

# 🧭 1. OVERVIEW

Modul Carian Pintar Award membolehkan pengguna mencari, menapis dan mengakses keputusan kes (award) yang telah diterbitkan dalam sistem eMP v2.0.

Modul ini bertindak sebagai:
- repositori berpusat bagi semua award
- enjin carian pintar (full-text + semantic search)
- sumber rujukan undang-undang dan kes terdahulu

---

# 🎯 2. OBJECTIVE

Modul ini perlu membolehkan:
- carian pantas berdasarkan keyword atau ayat penuh
- cadangan kes berkaitan (semantic)
- penapisan berdasarkan kategori
- paparan keputusan dalam format mudah dibaca

---

# 👥 3. ACTORS

## Public (Primary)
- Orang awam
- Peguam
- Penyelidik

## Internal
- Pegawai Mahkamah
- Pengerusi (reference)

---

# 📌 4. SCENARIO

## Scenario 1 – Lawyer cari kes rujukan

Seorang peguam ingin mencari kes berkaitan “unfair dismissal compensation”.

👉 Dia masukkan:
"pembuangan kerja pampasan"

👉 Sistem:
- paparkan senarai kes relevan
- highlight keyword
- cadangkan kes serupa

---

## Scenario 2 – Public user cari keputusan kes

Pengguna awam ingin tahu keputusan kes tertentu.

👉 Dia search:
"Tay Hwee Lan Healthy Vision"

👉 Sistem:
- terus keluarkan award case tersebut
- paparkan summary + dokumen

---

## Scenario 3 – Research / Analysis

Pegawai ingin lihat trend kes 2025

👉 Filter:
- Year: 2025
- Case Type: Unfair Dismissal

👉 Sistem:
- paparkan senarai filtered award

---

# 🧠 5. USER STORY

## US-SR-001
Sebagai pengguna,  
Saya ingin mencari award menggunakan kata kunci,  
Supaya saya boleh jumpa kes dengan cepat.

## US-SR-002
Sebagai peguam,  
Saya ingin melihat kes berkaitan secara automatik,  
Supaya saya boleh buat rujukan undang-undang.

## US-SR-003
Sebagai penyelidik,  
Saya ingin menapis kes mengikut kategori,  
Supaya saya boleh buat analisis.

## US-SR-004
Sebagai pengguna awam,  
Saya ingin melihat keputusan kes dengan jelas,  
Supaya saya faham hasil kes tersebut.

---

# 🔄 6. PROCESS FLOW

```
User buka portal
 ↓
Masuk halaman Carian Award
 ↓
Masukkan keyword / query
 ↓
Sistem proses:
  - full-text search
  - semantic search
 ↓
Paparan hasil carian
 ↓
User klik award
 ↓
Paparan detail award
```

---

# 🧭 7. UI FLOW (PROTOTYPE STRUCTURE)

```
Portal / Dashboard
 ↓
Menu: Carian Award
 ↓
Search Page
 ↓
Result Page
 ↓
Award Detail Page
```

---

# 🧩 8. SCREEN BREAKDOWN

---

## 🧩 SCREEN 1 – SEARCH PAGE

### UI Components

```
- Search Bar (main focus)
- Suggested Search Keywords
- Recent Searches
- Filter Panel (collapsed by default)
```

---

### Sample UI Text

```
"Carian Keputusan Kes"
"Masukkan kata kunci, nama kes atau topik..."
```

---

## 🧩 SCREEN 2 – SEARCH RESULT LIST

### UI Components

```
- Result List (card/table)
- Highlighted Keywords
- Filter Sidebar
- Sort Options (Relevance / Latest)
```

---

### Sample Data

```json
[
  {
    "award_id": "AW-2026-00125",
    "case_title": "Tay Hwee Lan v Healthy Vision Sdn Bhd",
    "year": 2026,
    "case_type": "Unfair Dismissal",
    "outcome": "Compensation",
    "summary": "Mahkamah mendapati pembuangan kerja adalah tanpa sebab munasabah...",
    "relevance_score": 0.95
  },
  {
    "award_id": "AW-2026-00130",
    "case_title": "Azman Bin Isa v Technip Energies",
    "year": 2026,
    "case_type": "Unfair Dismissal",
    "outcome": "Dismissed",
    "summary": "Mahkamah mendapati tindakan majikan adalah sah...",
    "relevance_score": 0.89
  }
]
```

---

## 🧩 SCREEN 3 – FILTER PANEL

### UI Components

```
- Year (Dropdown / Multi-select)
- Case Type
- Court
- Outcome
- Chairman
```

---

### Sample Filter

```json
{
  "year": [2025, 2026],
  "case_type": "Unfair Dismissal",
  "outcome": "Compensation"
}
```

---

## 🧩 SCREEN 4 – AWARD DETAIL VIEW

### UI Components

```
- Case Header
- Award Summary
- Full Award Document
- Download Button
- Related Cases (AI suggestion)
```

---

### Sample Data

```json
{
  "award_id": "AW-2026-00125",
  "case_number": "1/1-1522/25",
  "case_title": "Tay Hwee Lan v Healthy Vision Sdn Bhd",
  "court": "Mahkamah 1",
  "chairman": "YA Dato Wan Jeffry Kassim",
  "award_date": "2026-03-25",
  "outcome": "Compensation",
  "decision_summary": "Mahkamah mendapati pembuangan kerja adalah tanpa sebab munasabah...",
  "document_url": "/awards/AW-2026-00125.pdf"
}
```

---

## 🧩 SCREEN 5 – RELATED CASES (SMART FEATURE)

### UI Components

```
- “Kes Berkaitan”
- Similar Case List
```

---

### Sample Data

```json
[
  {
    "case_title": "Siti Aminah v XYZ Sdn Bhd",
    "similarity": 0.92
  },
  {
    "case_title": "Rahman v ABC Corp",
    "similarity": 0.88
  }
]
```

---

# ⚙️ 9. SEARCH TYPES

## Full Text Search
- berdasarkan keyword dalam dokumen

## Semantic Search
- berdasarkan maksud
- contoh:
  - "pembuangan kerja" → "unfair dismissal"

---

# 🔗 10. INTEGRATION

```
Award Module → source data
Search Engine → query processing
Dashboard → analytics
Portal → public access
```

---

# 🎨 11. DESIGN PRINCIPLES

- Google-like search simplicity
- Clean UI
- Fast response feel
- Highlight results
- Mobile + tablet friendly

---

# 🚀 12. ANTIGRAVITY PROMPT

```
Design a legal case search system with:

- Central search bar
- Result list with highlighted keywords
- Filter sidebar
- Award detail page
- Related case suggestions
- Clean government UI
- Responsive design
```

---

# 🔥 13. KEY POSITIONING

👉 Ini bukan sekadar search

👉 Ini:
**Legal Knowledge Engine**

👉 Value:
- reference
- research
- transparency

👉 Outcome:
- system nampak intelligent
- bukan sekadar database

````

# **M11  \- Perjanjian Kolektif** 

````
# 📘 eMP v2.0 – MODUL PERJANJIAN KOLEKTIF (M11)
### UI/UX BRIEF (SIMPLE & STRAIGHTFORWARD FOR DESIGN TEAM)

---

# 🎯 1. APA MODUL NI BUAT (SIMPLE)

Modul ini untuk:
- simpan rekod perjanjian antara majikan & kesatuan
- upload dokumen perjanjian
- semak status (aktif / tamat / dalam semakan)
- cari semula perjanjian

👉 Anggap macam:
**“Google Drive + sistem rekod rasmi untuk Collective Agreement”**

---

# 👥 2. SIAPA GUNA (ROLES)

## Internal (utama)
- CA Unit (admin utama modul)
- Pegawai Mahkamah

## External (optional view)
- Kesatuan
- Majikan
- Peguam

👉 Untuk prototype:
Fokus pada **CA Unit / Pegawai sahaja**

---

# 🧭 3. USER JOURNEY (MUDAH FAHAM)

### Flow utama:

```
Login
 ↓
Masuk Modul Perjanjian Kolektif
 ↓
Nampak Senarai Perjanjian
 ↓
Klik "Tambah Baru"
 ↓
Isi Maklumat + Upload Dokumen
 ↓
Save
 ↓
Boleh cari & buka semula
```

---

# 🧩 4. SCREEN YANG WAJIB ADA

## ✅ SCREEN 1 – SENARAI PERJANJIAN (MAIN PAGE)

### Apa perlu ada:

- Search bar (atas)
- Filter (sebelah kiri / dropdown)
- Table list
- Button: “+ Daftar Perjanjian”

---

### Table Column:

| Field | Example |
|------|--------|
| Agreement ID | CA-2026-001 |
| Nama Perjanjian | Perjanjian Kilang Jaya |
| Majikan | Kilang Automotif Jaya |
| Kesatuan | Kesatuan Pekerja Kilang |
| Tarikh Mula | 01/01/2026 |
| Tarikh Tamat | 31/12/2028 |
| Status | Aktif |
| Action | View |

---

### Sample Data

```json
[
  {
    "agreement_id": "CA-2026-001",
    "title": "Perjanjian Kolektif Kilang Jaya",
    "employer": "Kilang Automotif Jaya Sdn Bhd",
    "union": "Kesatuan Pekerja Kilang Jaya",
    "start_date": "2026-01-01",
    "end_date": "2028-12-31",
    "status": "Aktif"
  },
  {
    "agreement_id": "CA-2025-010",
    "title": "Perjanjian Logistik Delta",
    "employer": "Delta Freight Malaysia",
    "union": "Kesatuan Logistik",
    "start_date": "2025-03-01",
    "end_date": "2027-02-28",
    "status": "Dalam Semakan"
  }
]
```

---

### Filter yang perlu ada:

- Tahun
- Status (Aktif / Tamat / Dalam Semakan)
- Nama Majikan
- Nama Kesatuan

---

## ✅ SCREEN 2 – DAFTAR PERJANJIAN BARU

### Apa perlu ada:

Form simple:

```
- Nama Perjanjian
- Nama Majikan
- Nama Kesatuan
- Tarikh Mula
- Tarikh Tamat
- Status
- Upload Dokumen (PDF)
```

---

### Sample Data

```json
{
  "agreement_title": "Perjanjian Kolektif Kilang Jaya",
  "employer": "Kilang Automotif Jaya Sdn Bhd",
  "union": "Kesatuan Pekerja Kilang Jaya",
  "start_date": "2026-01-01",
  "end_date": "2028-12-31",
  "status": "Aktif",
  "document": "CA_JAYA_2026.pdf"
}
```

---

## ✅ SCREEN 3 – DETAIL PERJANJIAN

### Apa perlu ada:

```
- Semua maklumat perjanjian
- Status (highlight)
- Download dokumen
- Button: Edit
```

---

### UI Layout

```
Header:
- Nama Perjanjian
- Status Badge

Content:
- Employer
- Union
- Start Date
- End Date

Document:
- View / Download
```

---

### Sample Data

```json
{
  "agreement_id": "CA-2026-001",
  "title": "Perjanjian Kolektif Kilang Jaya",
  "status": "Aktif",
  "employer": "Kilang Automotif Jaya",
  "union": "Kesatuan Pekerja Kilang",
  "start_date": "2026-01-01",
  "end_date": "2028-12-31",
  "document_url": "/docs/CA_JAYA.pdf"
}
```

---

## ✅ SCREEN 4 – EDIT PERJANJIAN

### Sama macam form tambah, tapi:
- pre-filled data
- boleh update status / tarikh / dokumen

---

## ✅ SCREEN 5 – SEARCH RESULT (OPTIONAL)

👉 boleh reuse screen 1 (filtered result)

---

# 🔄 5. STATUS FLOW (MUDAH)

```
Dalam Semakan → Aktif → Tamat
```

---

# ⚙️ 6. ACTION BY ROLE

## CA Unit / Pegawai
- Tambah perjanjian
- Edit perjanjian
- Upload dokumen
- Update status

## User lain
- View sahaja

---

# 🎨 7. DESIGN STYLE

- Simple table + form
- Clean government UI
- Status guna color:
  - Hijau = Aktif
  - Kuning = Dalam Semakan
  - Merah = Tamat

---

# 🚀 8. ANTIGRAVITY PROMPT

```
Design a government system to manage collective agreements with:

- Table list view
- Search and filter
- Form to create agreement
- Detail view with document
- Clean UI
- Simple layout
```

---

# 🔥 9. KEY MESSAGE UNTUK TEAM UI/UX

👉 Ini bukan complex system

👉 Fokus:
- list
- form
- detail

👉 Jangan overdesign

👉 Priority:
**clear + mudah guna + structured**

````

# **M3 \- Pengurusan Notis**

````
# 📘 UI/UX BRIEF – MODUL PENGURUSAN NOTIS (M3)
### eMP v2.0 – SIMPLE VERSION FOR UI/UX TEAM

---

# 🎯 1. APA MODUL NI BUAT (MUDAH FAHAM)

Modul ini untuk:
- create notis / announcement rasmi mahkamah
- paparkan notis kepada pengguna (portal / dashboard)
- urus status notis (aktif / tidak aktif)

👉 Contoh notis:
- “Mahkamah ditutup pada 1 Mei”
- “Perubahan jadual prosiding”
- “Pengumuman rasmi”

---

# 👥 2. SIAPA GUNA

## Internal (utama)
- Admin
- Pegawai Mahkamah

## External
- Semua pengguna (view sahaja)

---

# 🧭 3. USER JOURNEY (MUDAH)

## Internal (Admin)

```
Login
 ↓
Masuk Modul Notis
 ↓
Klik "Tambah Notis"
 ↓
Isi maklumat
 ↓
Publish
 ↓
Notis muncul di portal
```

## External User

```
Masuk Portal
 ↓
Nampak Notis
 ↓
Klik notis
 ↓
Baca detail
```

---

# 🧩 4. SCREEN YANG PERLU ADA

## ✅ SCREEN 1 – SENARAI NOTIS

### Apa perlu ada:

- button: "+ Tambah Notis"
- search bar
- filter
- table list

---

### Column dalam table:

| Field | Example |
|------|--------|
| Tajuk Notis | Penutupan Mahkamah |
| Kategori | Umum |
| Tarikh | 01/05/2026 |
| Status | Aktif |
| Action | Edit |

---

### Sample Data

```json
[
  {
    "title": "Penutupan Mahkamah Sempena Hari Pekerja",
    "category": "Umum",
    "date": "2026-05-01",
    "status": "Aktif"
  },
  {
    "title": "Perubahan Jadual Sebutan Kes",
    "category": "Kes",
    "date": "2026-04-15",
    "status": "Aktif"
  },
  {
    "title": "Notis Lama",
    "category": "Umum",
    "date": "2025-12-01",
    "status": "Tidak Aktif"
  }
]
```

---

### Filter yang perlu ada:

- Status (Aktif / Tidak Aktif)
- Kategori
- Tarikh

---

## ✅ SCREEN 2 – TAMBAH / EDIT NOTIS

### Field dalam form:

```
- Tajuk Notis
- Kategori (dropdown)
- Kandungan Notis (textarea)
- Tarikh Paparan
- Tarikh Tamat (optional)
- Status (Aktif / Tidak Aktif)
```

---

### Sample Data

```json
{
  "title": "Penutupan Mahkamah Sempena Hari Raya",
  "category": "Umum",
  "content": "Mahkamah akan ditutup dari 10 hingga 14 April 2026.",
  "start_date": "2026-04-10",
  "end_date": "2026-04-14",
  "status": "Aktif"
}
```

---

### Button:

- Simpan
- Publish
- Batal

---

## ✅ SCREEN 3 – PAPARAN NOTIS (USER VIEW)

### Apa perlu ada:

```
- Senarai notis (card / list)
- Tajuk
- Tarikh
- Ringkasan
```

---

## Contoh UI:

```
[Penutupan Mahkamah Sempena Hari Raya]
Tarikh: 10 April 2026
Mahkamah akan ditutup dari 10 hingga 14 April...

[Klik untuk baca lanjut]
```

---

### Sample Data

```json
[
  {
    "title": "Penutupan Mahkamah Sempena Hari Raya",
    "date": "2026-04-10",
    "summary": "Mahkamah akan ditutup dari 10 hingga 14 April..."
  }
]
```

---

## ✅ SCREEN 4 – DETAIL NOTIS

### Apa perlu ada:

```
- Tajuk
- Tarikh
- Kandungan penuh
```

---

### Sample Data

```json
{
  "title": "Penutupan Mahkamah Sempena Hari Raya",
  "date": "2026-04-10",
  "content": "Mahkamah akan ditutup dari 10 hingga 14 April 2026. Semua prosiding akan ditangguhkan."
}
```

---

# ⚙️ 5. ACTION BY ROLE

## Admin / Pegawai
- Create notis
- Edit notis
- Publish / unpublish

## User
- View sahaja

---

# 🎨 6. DESIGN GUIDELINE

- Simple list + form
- Clean UI
- Highlight tajuk notis
- Jangan terlalu banyak info
- Mobile friendly

---

# 🚀 7. ANTIGRAVITY PROMPT

```
Design a government notice management module with:

- notice list table
- create/edit form
- public notice display
- clean UI
- simple layout
```

---

# 🔥 8. KEY MESSAGE UNTUK UI/UX TEAM

👉 Ini bukan notification system

👉 Ini:
**announcement / notice board**

👉 Fokus:
- list notis
- form create
- paparan mudah dibaca

👉 Keep it simple.

````

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,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>

[image3]: <data:image/png;base64,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>