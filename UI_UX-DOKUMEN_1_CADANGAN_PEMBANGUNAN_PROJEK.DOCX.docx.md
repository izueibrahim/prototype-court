

## DOKUMEN 1
TENDER PERKHIDMATAN PEMBANGUNAN SISTEM e-MAHKAMAH PERUSAHAAN (eMP) v2.0
## DI MAHKAMAH PERUSAHAAN MALAYSIA, KEMENTERIAN SUMBER MANUSIA

Petender dikehendaki memberikan cadangan pembangunan yang menarik, lengkap dan komprehensif bukan sahaja dari aspek
teknikal tetapi juga meliputi kaedah pelaksanaan.

Cadangan pendekatan MESTILAH meliputi tetapi tidak terhad kepada aspek-aspek seperti berikut:

CADANGAN PEMBANGUNAN eMP v2.0:

a) Metodologi Pembangunan eMP v2.0;
b) Cadangan Antara Muka/ Prototaip eMP v2.0 dengan merujuk kepada maklumat di LAMPIRAN B – Senarai Aplikasi dan
Modul Sedia Ada dan LAMPIRAN C_Pengenalan Projek dan Keterangan Modul eMPv2.0;
c) Cadangan hendaklah menyatakan ciri-ciri keselamatan aplikasi merangkumi dan tidak terhad seperti berikut:
i. Perlindungan bagi privasi maklumat
ii. Kawalan akses kepada maklumat
iii. Perlindungan dari virus dan malware
iv. Audit Trail
v. Multi Factor Authentication (MFA)
vi. Encryption yang memenuhi piawaian MySEAL

d) Cadangan Perisian dan Teknologi Pembangunan Sistem yang dicadangkan. Sila nyatakan dan jelaskan
i. Perisian Pembangunan Sistem;
ii. Bahasa Pengaturcaraan;
iii. Framework;
iv. Pangkalan Data; dan
v. Lain-lain (Nilai Tambah Cadangan) yang akan digunakan semasa pembangunan eMP v2.0 mengikut format jadual
yang berikut:


## DOKUMEN 1
## Bil. Perisian / Pengaturcaraan /
## Tools
## Bilangan Lesen
## Perisian
## Keterangan










e) Cadangan Arkitektur Keseluruhan Sistem dan spesifikasi server mestilah mengambil kira keperluan Virtualization, High
Availability. Sila jelaskan reka bentuk arkitektur keseluruhan sistem yang dicadangkan;
f) Rekabentuk arkitektur keseluruhan fungsi dan komponen Modul memenuhi ciri-ciri ease of use, flexible, scalable,
expandable dan boleh dikonfigurasi
g) Lain-lain (Nilai Tambah Cadangan).













## DOKUMEN 1
## 1) Executive Overview
## 1.1 Ringkasan Projek
Projek eMP v2.0 ialah pembangunan semula menyeluruh platform digital Mahkamah Perusahaan Malaysia bagi menyokong
proses teras mahkamah secara hujung-ke-hujung, bermula daripada pendaftaran kes, agihan kes, prosiding, pengurusan kes,
pengeluaran award, sehinggalah kepada carian award dan pelaporan. Lampiran C menerangkan bahawa projek ini bertujuan
memastikan kesinambungan bisnes teras mahkamah, memodenkan modul sedia ada, memperkukuh keselamatan, dan
menyediakan saluran maklumat pengurusan kes yang lebih selamat dan berintegriti.
Sistem sedia ada pula terdiri daripada beberapa aplikasi berasingan seperti eIC, eICx, e-Filing/e-Service, portal MPM, dan paparan
makluman mahkamah, yang dibangunkan menggunakan teknologi Java, Ajax, Tomcat, Apache Web dan MySQL. Ini menunjukkan
keperluan tinggi untuk konsolidasi dan pemodenan seni bina sistem.
## 1.2 Objektif Penyelesaian Yang Dicadangkan
Cadangan penyelesaian teknikal ini bertujuan untuk:
● membangunkan satu platform bersepadu untuk 13 modul utama eMP v2.0

● memodenkan seni bina daripada sistem legasi kepada seni bina modular berasaskan API

● menyokong log masuk berpusat dan integrasi MyDigital ID

● membolehkan integrasi data dengan JPPM bagi pendaftaran kes


## DOKUMEN 1
● menyediakan Carian Pintar Award berasaskan full-text, semantic dan vector search

● meningkatkan keselamatan aplikasi, data dan persekitaran selaras dengan keperluan OWASP, MFA, audit trail dan
encryption

## 1.3 Prinsip Reka Bentuk Cadangan
Cadangan sistem hendaklah mematuhi prinsip berikut:
● Web-based & responsive

● API-ready

## ● Scalable

## ● Secure-by-design

## ● Future-proof

## ● Modular

● High Availability capable

● Government-friendly on-prem deployment


## DOKUMEN 1
Spesifikasi tender mewajibkan cadangan arkitektur dalam virtual environment, menekankan High Availability, Load Balancing,
MVC, teknologi sumber terbuka, pangkalan data utama MySQL, serta keperluan UI/UX moden dan sistem responsif merentas
peranti

## 2) Complete System Architecture Diagram


+----------------------------------------------------------------------------------+
|                            eMP v2.0 DIGITAL PLATFORM                             |
+----------------------------------------------------------------------------------+

## PUBLIC USERS                 EXTERNAL USERS                    INTERNAL USERS
+----------------+      +--------------------------+      +--------------------------+
| Public Visitor |      | Lawyer / Claimant /      |      | YDP / Chairman /         |
| Award Search   |      | Respondent / Panel       |      | Registrar / AR / Admin   |
| Schedule View  |      | e-Filing / e-Service     |      | Full Internal Operation  |
+-------+--------+      +------------+-------------+      +-------------+------------+
## |                              |                                  |
## +------------------------------+----------------------------------+
## |
v
+----------------------------------------------------------------------------------+
|                          FRONTEND / EXPERIENCE LAYER                             |
|----------------------------------------------------------------------------------|
|  Next.js Web Portal                                                              |
|  - Public Portal                                                                 |
|  - Authenticated User Portal                                                     |
|  - Internal Court Portal                                                         |
|  - Admin Console                                                                 |

## DOKUMEN 1
|  - Responsive UI (Desktop / Tablet / Mobile)                                     |
+-----------------------------------+----------------------------------------------+
## |
v
+----------------------------------------------------------------------------------+
|                        ACCESS & SECURITY GATEWAY LAYER                           |
|----------------------------------------------------------------------------------|
|  Centralized Access Management                                                   |
|  - SSO / Single Entry Point                                                      |
|  - MyDigital ID Integration                                                      |
|  - MFA                                                                           |
|  - RBAC                                                                          |
|  - Session Management                                                            |
|  - API Authorization                                                             |
|  - Audit Logging                                                                 |
+-----------------------------------+----------------------------------------------+
## |
v
+----------------------------------------------------------------------------------+
|                           APPLICATION / SERVICE LAYER                            |
|----------------------------------------------------------------------------------|
| Symfony PHP Core Services                                                        |
|                                                                                  |
|  [M1] Portal eMP                  [M8] Carian Pintar Award                       |
|  [M2] Access Mgmt                 [M9] Pendaftaran Kes                           |
|  [M3] Pengurusan Notis            [M10] Pengurusan Kes                           |
|  [M4] e-Filing & e-Service        [M11] Perjanjian Kolektif                      |
|  [M5] e-Sebutan                   [M12] Dashboard & Laporan                      |
|  [M6] Jadual Mahkamah             [M13] Pentadbir Sistem                         |
|  [M7] Paparan Kandungan Digital                                                  |
|                                                                                  |
|  Shared Services                                                                 |
|  - Notification Service                                                          |
|  - Document Service                                                              |
|  - Search Index Sync Service                                                     |

## DOKUMEN 1
|  - Integration Monitoring                                                        |
|  - Workflow / Rules Engine                                                       |
+-----------------------------------+----------------------------------------------+
## |
## +---------------+------------------+-------------------+
## |                                  |                   |
v                                  v                   v
+--------------------------+      +--------------------------------+   +----------------------+
| TRANSACTION DATABASE     |      | SEARCH / AI DATABASE           |   | OBJECT STORAGE       |
|--------------------------|      |--------------------------------|   |----------------------|
| MySQL Enterprise         |      | PostgreSQL + pgvector          |   | MinIO                |
| Main transactional DB    |      | Full-text / semantic / vector  |   | Documents / PDFs     |
| Case / Registry / Notice |      | Award search index             |   | Filing attachments   |
| Schedule / Users / Logs  |      | OCR text + metadata search     |   | Scanned awards       |
+--------------------------+      +--------------------------------+   +----------------------+

## |
v
+----------------------------------------------------------------------------------+
|                              INTEGRATION LAYER                                   |
|----------------------------------------------------------------------------------|
| API Gateway / Integration Services                                               |
| - REST / SOAP                                                                    |
| - Real-time / Batch / SFTP / HTTPS                                               |
| - Integration Monitoring                                                         |
| - API Key / Token Control                                                        |
| - Retry / Failure Isolation                                                      |
+---------------------------+--------------------------------+---------------------+
## |                                |
v                                v
## +--------------------+            +----------------------+
| JPPM Integration   |            | MyDigital ID         |
## | Case Registration  |            | Authentication       |
## +--------------------+            +----------------------+


## DOKUMEN 1
## |
v
+----------------------------------------------------------------------------------+
|                           INFRASTRUCTURE / PLATFORM LAYER                        |
|----------------------------------------------------------------------------------|
| Linux Ubuntu on Government VM                                                    |
| - Virtualization                                                                 |
| - Staging / Production at JDN                                                    |
| - HA-ready deployment                                                            |
| - Load Balancing                                                                 |
| - Backup / Restore / DR                                                          |
| - Logging / Monitoring                                                           |
+----------------------------------------------------------------------------------+


## 2.1 Justifikasi Architecture
Cadangan ini sejajar dengan spesifikasi kerana tender mewajibkan:
● arkitektur dalam virtual environment

● penggunaan MySQL sebagai pangkalan data utama

● penggunaan pangkalan data relasi-vektor seperti PostgreSQL + pgvector untuk Modul Carian Pintar

● High Availability, Load Balancing, dan seni bina yang scalable

● pembangunan berasaskan MVC atau setara

● sistem web-based, responsif, dan menyokong pelbagai browser/peranti


## DOKUMEN 1
## 3) Module Architecture Design
Berikut ialah pecahan 13 modul dengan fokus fungsi, actor, dan interaksi utama berdasarkan Lampiran C.

+----------------------------------------------------------------------------------+
|                             MODULE ARCHITECTURE MAP                              |
+----------------------------------------------------------------------------------+

[M1] Portal eMP
- Landing page utama
- Public info, schedule, award search, case info, collective agreement
- Public-facing, bilingual, CMS-enabled

[M2] Pengurusan Akses Berpusat
## - Single Entry Point
- SSO / MyDigital ID / role-based access / MFA

[M3] Pengurusan Notis
- Main task page
- Alerts, reminders, new cases, work queues by access right

[M4] e-Filing & e-Services
- External filing by lawyer / claimant / respondent / panel
- Upload documents, case submission

[M5] e-Sebutan (e-Mention)
- Online mention via chatting
## - Bilingual

[M6] Jadual Mahkamah
- Daily / weekly / monthly court calendar
- Court hearing management view

## DOKUMEN 1

[M7] Paparan Kandungan Digital Elektronik
- Displays notices / schedule / room info / announcements on screens

[M8] Carian Pintar (Award)
- Full-text search
- Tokenization / stemming
- Semantic search
- Vector search
- Search all legacy + newly scanned awards

[M9] Pendaftaran Kes
- New case registration
- Auto case distribution suggestion
- YDP approval
- JPPM data integration

[M10] Pengurusan Kes
- Core business process until case closure

[M11] Perjanjian Kolektif
- Collective agreement management

[M12] Dashboard dan Laporan
- Court statistics / reports / management insight

[M13] Pentadbir Sistem
- System administration / internal operation / setup


## 3.1 Module Interaction Flow


## DOKUMEN 1

[M1 Portal]
|--> [M8 Search Award]
|--> [M6 Court Schedule]
|--> [M4 e-Filing]
|--> [M2 Access Mgmt]

[M2 Access Mgmt]
|--> semua modul yang memerlukan autentikasi
|--> MyDigital ID
|--> role-based routing

[M4 e-Filing]
|--> [M9 Pendaftaran Kes]
|--> [M10 Pengurusan Kes]
|--> [Object Storage]
|--> [Notification Service]

[M9 Pendaftaran Kes]
|--> [JPPM Integration]
|--> [M10 Pengurusan Kes]
|--> [M6 Jadual Mahkamah]

[M10 Pengurusan Kes]
|--> [M3 Pengurusan Notis]
|--> [M5 e-Sebutan]
|--> [M6 Jadual Mahkamah]
|--> [M8 Carian Award - publish award]
|--> [M12 Dashboard & Laporan]

[M7 Paparan Digital]
|--> tarik maklumat dari [M6], [M3], [M10]

[M8 Carian Pintar Award]
|--> MySQL metadata

## DOKUMEN 1
|--> PostgreSQL + pgvector
|--> MinIO scanned PDFs
|--> OCR indexed content

[M13 Pentadbir Sistem]
|--> users / roles / API / logs / settings / integration monitoring


3.2 Actor-to-Module Mapping


## PUBLIC USER
## -> M1 Portal
## -> M6 Jadual Mahkamah
## -> M8 Carian Pintar Award

## LAWYER / CLAIMANT / RESPONDENT / PANEL
## -> M2 Access
-> M4 e-Filing
-> M5 e-Sebutan
## -> M6 Jadual
## -> M8 Award Search

## YDP
## -> M2 Access
## -> M3 Notis
## -> M9 Pendaftaran Kes
## -> M10 Pengurusan Kes
## -> M12 Dashboard

## PENGERUSI

## DOKUMEN 1
## -> M2 Access
-> M5 e-Sebutan
## -> M6 Jadual
## -> M10 Pengurusan Kes
## -> M8 Award

## PENDAFTAR / AR / UPK
## -> M2 Access
## -> M3 Notis
## -> M6 Jadual
## -> M9 Pendaftaran Kes
## -> M10 Pengurusan Kes
## -> M12 Laporan

## CA UNIT
## -> M11 Perjanjian Kolektif

## ADMIN
## -> M13 Pentadbir Sistem
## -> M2 Access
## -> M3 Notis
## -> M7 Digital Display



## 4) User Story Framework
Di bawah ialah format user story asas yang boleh terus dijadikan backlog kepada BA, UI/UX, dan technical team.
## 4.1 Public Portal Stories

## DOKUMEN 1

## US-001
As a public user,
I want to access the main eMP portal,
so that I can view court-related information and access public services.

## US-002
As a public user,
I want to search full awards using keywords or metadata,
so that I can find relevant Industrial Court decisions.

## US-003
As a public user,
I want to view daily/weekly/monthly court schedule,
so that I know upcoming hearings and case slots.

## US-004
As a public user,
I want to read court notices and announcements,
so that I can stay informed of current updates.


## 4.2 Access & Authentication Stories

## US-010
As a registered user,
I want a single entry login page,
so that I can access the correct service based on my role.

## US-011
As a registered user,
I want to login using MyDigital ID when applicable,

## DOKUMEN 1
so that authentication is secure and government-compliant.

## US-012
As a system administrator,
I want role-based access control,
so that users only access modules relevant to their role.

## US-013
As a system administrator,
I want MFA enforced for privileged roles,
so that access to sensitive data is protected.


4.3 e-Filing Stories

## US-020
As a lawyer or claimant,
I want to register an account,
so that I can submit cases and documents online.

## US-021
As an external party,
I want to create a new filing,
so that I can submit a dispute to the court digitally.

## US-022
As an external party,
I want to upload supporting documents,
so that the court can process my filing.

## US-023
As an external party,

## DOKUMEN 1
I want to receive filing confirmation and status updates,
so that I know my submission progress.


## 4.4 Case Registration & Case Management Stories

## US-030
As a registrar,
I want to review submitted filings,
so that only complete and valid submissions proceed.

## US-031
As a registrar,
I want the system to generate a new case registration draft,
so that case intake is faster and more consistent.

## US-032
As the system,
I want to suggest case distribution automatically,
so that case allocation is balanced according to workload.

## US-033
As YDP,
I want to review and approve case distribution,
so that final court assignment follows authority approval.

## US-034
As a court officer,
I want to manage case details, documents, and status,
so that the full case lifecycle is tracked centrally.

## US-035

## DOKUMEN 1
As a chairman,
I want to record proceedings and upload awards,
so that case closure and decision publication are controlled.


4.5 e-Sebutan & Schedule Stories

## US-040
As a registrar,
I want to manage court schedules in calendar form,
so that hearings and mentions are arranged clearly.

## US-041
As a hearing participant,
I want to join e-Sebutan online,
so that mention sessions can be handled digitally.

## US-042
As a chairman,
I want to conduct e-Sebutan through chat-based interaction,
so that virtual mention is lightweight and practical.

Module Mapping: e-Sebutan Manual → eMP 2.0 Modules
Based on the manual workflow (login, join mention room, messaging, leave session), the features should be distributed across multiple modules rather than
exist as a single isolated feature.


## DOKUMEN 1
Manual Function Current Behaviour eMP 2.0 Module Enhancement
Login as eFiling User / Guest User authentication
## User Identity & Access
## Management
Add SSO, role-based access
Enter Room Code Join hearing session
e-Sebutan Management
## Module
Integrate with case schedule
Waiting for Approval Officer approves entry
## Session Moderation
## Module
Queue monitoring & participant control
View Today’s e-Mentions List of sessions
## Court Schedule
## Management
Calendar-based hearing system
Send Message / Reply Text communication
## Court Communication
## Module
Add document sharing & transcript
View Mention Details Session metadata Case Management Module Link to case record
Leave Mention Exit session
## Session Lifecycle
## Management
Auto logging and audit trail


## 4.6 Award Search Stories

## US-050
As an internal officer,
I want to search awards by legal meaning and context,
so that I can find relevant precedents more accurately.

## US-051
As the search engine,
I want to support tokenization, stemming, full-text and vector search,
so that search results are precise and comprehensive.


## DOKUMEN 1
## US-052
As a court officer,
I want newly scanned awards to be indexed automatically,
so that legacy documents are searchable together with new records.

## 4.7 Reporting & Admin Stories

## US-060
As management,
I want dashboard and reports on case workload and status,
so that I can monitor operational performance.

## US-061
As an admin,
I want to manage users, settings, and permissions,
so that the system can be operated securely.

## US-062
As an admin,
I want to monitor API integrations,
so that failed transactions can be tracked and resolved.



UI/UX Brief



## None
## DOKUMEN 1
## # UI/UX PROTOTYPE BRIEF
# eMP v2.0 — Industrial Court Digital Platform

Prepared by: Project Lead / Solution Architect

## Purpose:
Provide a complete guideline for the UI/UX team to design a **functional prototype of the eMP v2.0 system**, aligned with:

- Tender specification
- Lampiran C module structure
- Real Industrial Court operational workflow
- Role-based user interaction

The prototype should simulate **the full lifecycle of an Industrial Court case** from filing until award publication.

## ---

## # 1. PRODUCT VISION

The **e-Mahkamah Perusahaan (eMP) v2.0** platform will serve as the **central digital justice platform for Industrial
## Court Malaysia**.

The system must support the **full lifecycle of an industrial dispute case**, including:

## - Case Filing
## - Case Registration
## - Case Allocation
## - Hearing & Mention Sessions
## - Case Management
- Decision (Award)
## - Award Publication
## - Legal Reference Search

## DOKUMEN 1

The platform must support **multiple user groups with role-based experiences**.

The objective is to deliver a **modern digital court platform that improves efficiency, transparency, and accessibility of
justice services**.

## ---

## # 2. CORE SYSTEM ACTORS

The system supports **three main actor groups**.

## ---

## # ACTOR GROUP 1 — COURT OFFICER (INTERNAL USERS)

These users manage the **internal operations of the Industrial Court**.

## ### Roles

## | Role | Description |
## |-----|-------------|
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

## DOKUMEN 1

## ---

# ACTOR GROUP 2 — eFILING USER (EXTERNAL USERS)

These are **external parties interacting with the court**.

## | Role | Description |
## |-----|-------------|
| Lawyer | Legal representative |
| Claimant | Employee bringing case |
| Respondent | Employer defending case |
| Union Rep | Union representative |

## ---

## # ACTOR GROUP 3 — PUBLIC USER

Users accessing **public information only**.

## | Role | Description |
## |-----|-------------|
| Public | General public |
| Researcher | Legal researcher |
## | Journalist | Media |

Public users mainly access:

- award search
- hearing schedule
- court notices
- practice notes

## DOKUMEN 1

## ---

## # 3. CORE SYSTEM MODULES

Based on **Lampiran C specification**.

## | Module | Purpose |
## |------|------|
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

## ---

## # 4. MAIN SYSTEM STORY (CASE LIFECYCLE)

The UI prototype must illustrate the **full story of a case lifecycle**.

Example scenario:

Employee files an unfair dismissal case against employer.

## DOKUMEN 1

## ```
Claimant files case
## ↓
eFiling submission
## ↓
Case registered by Registrar
## ↓
Case assigned to Chairman
## ↓
Mention session
## ↓
Hearing session
## ↓
Award issued
## ↓
Award published
## ↓
Public can search the award
## ```

The prototype must visually demonstrate this **End-to-End case lifecycle**.

## ---

## # 5. MAIN SYSTEM USER FLOW

## ```
## PUBLIC PORTAL
## ↓
## LOGIN GATEWAY
## ↓

## DOKUMEN 1
## ROLE SELECTION
## ↓
## USER DASHBOARD
## ↓
## MODULE ACCESS
## ```

## ---

## # 6. LOGIN EXPERIENCE

The login interface must match the **role selection screen prototype**.

Available roles:

## ```
## Court Officer
eFiling User
## Guest Access
## ```

## ### Guest Access

Used for:

- Virtual hearing participation
- eSebutan session
- Temporary access

## ---

## # 7. PUBLIC PORTAL EXPERIENCE

## DOKUMEN 1

The public portal is the **main entry point to the system**.

## ### Homepage Components

## #### Hero Section

Search functionality:

## ```
Search by:
- Case number
- Award title
## - Keywords
## ```

## ---

## ### Quick Actions

## ```
File a Document
## Join Virtual Court
## Practice Notes
## Selected Awards
## ```

## ---

### e-Services Directory

Card layout for services:

## DOKUMEN 1

## ```
## Case Management
## Collective Agreement
## Search Full Awards
## Practice Notes
## ```

## ---

## ### Hearings & Judgements

Display daily court schedule.

## Example:

## ```
09:00 AM — Hearing
11:00 AM — Trial
02:30 PM — Mention
## ```

Each entry includes:

- case title
- court number
- chairman
- case type

## ---

## ### Court Notices

## DOKUMEN 1

Example notices:

## ```
Practice Note No.1 — Implementation of eMP v2.0

Guidelines for remote attendance during public holidays
## ```

## ---

# 8. USER JOURNEY — CLAIMANT (eFiling User)

Scenario: Employee files unfair dismissal case.

## ### Steps

## ```
## Login
## ↓
## User Dashboard
## ↓
## File New Case
## ↓
## Fill Case Form
## ↓
## Upload Supporting Documents
## ↓
## Submit Filing
## ↓
## Receive Case Number
## ```

## DOKUMEN 1

### UI Screens Required

- Login page
- User dashboard
- Case filing form
- Document upload interface
- Submission confirmation
- Case tracking screen

## ---

## # 9. USER JOURNEY — REGISTRAR

Scenario: Registrar processes new filings.

## ### Steps

## ```
## View New Filing Queue
## ↓
## Review Case Details
## ↓
## Validate Documents
## ↓
## Register Case
## ↓
## Assign Case Number
## ↓
Forward for Case Allocation
## ```


## DOKUMEN 1
### UI Screens

- Registrar dashboard
- Filing review page
- Case registration form
- Case summary page

## ---

## # 10. USER JOURNEY — CASE ALLOCATION (YDP)

Scenario: YDP assigns case to chairman.

## ### Steps

## ```
## Open Allocation Panel
## ↓
## Review System Recommendation
## ↓
## Check Chairman Workload
## ↓
## Assign Case
## ↓
## Confirm Allocation
## ```

### UI Screens

- Allocation dashboard
- Workload overview
- Assignment interface

## DOKUMEN 1

## ---

## # 11. USER JOURNEY — CHAIRMAN (JUDGE)

Scenario: Chairman conducts hearing.

## ### Steps

## ```
## Login
## ↓
## Open Judge Dashboard
## ↓
## View Assigned Cases
## ↓
## Conduct Mention
## ↓
## Conduct Hearing
## ↓
## Upload Award
## ```

### UI Screens

- Judge dashboard
- Case details
- Hearing notes interface
- Award upload screen

## ---


## DOKUMEN 1
## # 12. USER JOURNEY — PUBLIC USER

Scenario: Public searches award.

## ### Steps

## ```
## Visit Portal
## ↓
## Search Award
## ↓
## View Case Summary
## ↓
## Download Award
## ```

## ---

## # 13. SMART AWARD SEARCH

Key feature of the system.

## ### Search Types

## ```
Keyword search
Legal concept search
Case reference search
## ```

Example query:


## DOKUMEN 1
## ```
unfair dismissal constructive dismissal
## ```

Result display:

## ```
Case title
## Court
## Chairman
Decision summary
Award PDF
## ```

## ---

## # 14. SAMPLE DATA FOR PROTOTYPE

Example case data:

## ### Case 1

## ```
## Case Number:
## 1/1-1522/25

## Case Title:
Tay Hwee Lan v Healthy Vision Sdn Bhd

## Chairman:
YA Dato Wan Jeffry Kassim


## DOKUMEN 1
## Court:
## Mahkamah 1

## Case Type:
## Unfair Dismissal

## Status:
## Hearing
## ```

## ---

## ### Case 2

## ```
## Case Title:
Azman Bin Isa v Technip Energies Malaysia

## Case Type:
## Unfair Dismissal

## Court:
## Mahkamah 1
## ```

## ---

## ### Case 3

## ```
## Case Title:
Siti Nurhaliza v Syarikat ABC Sdn Bhd

## DOKUMEN 1

## Case Type:
## Employment Termination
## ```

## ---

## # 15. DASHBOARD COMPONENTS

Internal dashboards should display:

## ### Case Statistics

## ```
New cases
Active cases
Cases this month
Pending awards
## ```

## ---

## ### Tasks

## ```
Cases awaiting mention
Cases awaiting hearing
Cases awaiting award
## ```

## ---


## DOKUMEN 1
## ### Notifications

## ```
New filings
Schedule changes
Notice issued
## ```

## ---

## # 16. COURT SCHEDULE VIEW

Calendar interface.

## Modes:

## ```
## Daily
## Weekly
## Monthly
## ```

Example schedule entry:

## ```
## 09:00 Hearing

## Case:
Tay Hwee Lan v Healthy Vision Sdn Bhd

## Court:
## Mahkamah 1

## DOKUMEN 1

## Chairman:
YA Dato Wan Jeffry Kassim
## ```

## ---

# 17. eSEBUTAN INTERFACE

Virtual mention interface.

## Layout:

## ```
Participant list
Chat / conversation
Document sharing
Session log
## ```

## ---

## # 18. DIGITAL DISPLAY

Courtroom display screens.

## Displays:

## ```
Courtroom number
Current case
Next case

## DOKUMEN 1
## Judge
## Time
## ```

## ---

## # 19. ADMIN MODULE

Admin manages system configuration.

## Functions:

## ```
User management
Role management
System settings
Integration configuration
System logs
## ```

## ---

## # 20. PROTOTYPE SCREENS REQUIRED

UI team should produce at least **16-20 screens**.

## ### Public Portal

## 1. Homepage
## 2. Award Search
## 3. Hearing Schedule


## DOKUMEN 1
## ---

## ### Login

## 4. Role Selection Gateway

## ---

### eFiling

## 5. User Dashboard
## 6. Case Filing Form
## 7. Document Upload
## 8. Case Tracking

## ---

## ### Court Operations

## 9. Registrar Dashboard
## 10. Case Registration
## 11. Case Allocation
## 12. Judge Dashboard

## ---

## ### Court Activities

## 13. Hearing Calendar
- eSebutan Interface
## 15. Digital Display


## DOKUMEN 1
## ---

## ### Administration

## 16. Admin Panel

## ---

## # 21. DESIGN PRINCIPLES

UI must follow:

## ```
Government-grade professional design
Clean interface
High readability
Fast navigation
Mobile responsive
Accessibility friendly
## ```

## ---

## # 22. DESIGN STYLE

Recommended design language:

## ```
Dark hero section
White content cards
Blue accent color
Minimal professional layout

## DOKUMEN 1
Legal institution theme
## ```

## ---

## # 23. AI PROTOTYPE GENERATION PROMPT (OPTIONAL)

UI team may use AI design tools with the following prompt:

## ```
Design a modern government court system dashboard for Industrial Court Malaysia with role-based access, case management,
hearing schedule, award search, and filing portal. UI must be professional, minimal, with dark hero section and clean card
layout suitable for judiciary systems.
## ```

## ---

## # FINAL OBJECTIVE

The prototype must demonstrate the **complete Industrial Court digital workflow**.

## ```
## Case Filing
## ↓
## Case Management
## ↓
## Hearing
## ↓
## Award
## ↓
## Public Search
## ```

## None
## DOKUMEN 1

This ensures the UI prototype fully represents the **end-to-end workflow of the Industrial Court digital system (eMP
v2.0)**.


Dashboard Analytic eMP


# eMP v2.0 Dashboard Analytics Brief
Industrial Court of Malaysia — e-Mahkamah Perusahaan (eMP) v2.0

## Purpose
Dokumen ini menyediakan panduan lengkap kepada team UI/UX, data engineer dan system architect untuk membangunkan modul
Dashboard & Analytics bagi sistem eMP v2.0. Dashboard ini akan menyokong pemantauan operasi Mahkamah Perusahaan secara
menyeluruh, daripada proses eFiling sehingga kepada pengeluaran Award serta analisis penggunaan sistem.

Dashboard ini juga berfungsi sebagai alat pemantauan prestasi sistem, prestasi operasi mahkamah dan penggunaan platform
oleh pengguna dalaman serta pengguna awam.

## ---

## Executive Dashboard

## Objective
Memberikan gambaran keseluruhan prestasi Mahkamah Perusahaan Malaysia secara real-time kepada pihak pengurusan tertinggi
seperti YDP dan pengurusan jabatan.


## DOKUMEN 1
Suggested KPI Cards
## Total Active Cases
## New Cases This Month
## Cases Closed This Month
## Backlog Cases
Average Days to Award
## Case Resolution Rate

## Suggested Metrics
Total Active Cases = count(case where status not closed)
New Cases This Month = count(case where filing_date within current month)
Cases Closed This Month = count(case where award_date within current month)
Backlog Cases = count(case where days_open > 90)
Average Days to Award = avg(award_date - registration_date)
Case Resolution Rate = cases_closed / new_cases

## Suggested Charts
## Monthly Case Filing Trend
## Monthly Case Resolution Trend
Case Distribution by Type
Case Distribution by Chairman
## Case Status Distribution

## Sample Dashboard Data

## Metric | Value
## Total Active Cases | 127
## New Cases This Month | 18
## Cases Closed This Month | 12
## Backlog Cases | 23
Average Days to Award | 68 days
## Resolution Rate | 0.67

## DOKUMEN 1

Sample Chart Data (Monthly Filing)

## Month | New Cases | Cases Closed
## Jan 2026 | 22 | 18
## Feb 2026 | 19 | 17
## Mar 2026 | 18 | 12

## Case Type Distribution

## Case Type | Count
## Unfair Dismissal | 64
## Constructive Dismissal | 21
## Collective Agreement | 18
## Trade Dispute | 12
Termination of Service | 12

## Chairman Workload

## Chairman | Active Cases
YA Dato Wan Jeffry Kassim | 32
YA Tuan Amrik Singh | 24
YA Puan Rusita Md Lazim | 21
YA Tuan Zulhelmy Hasan | 18
YA Dato Syed Noh Said | 17
YA Puan Kartini Hashim | 15

## ---

## Court Operations Dashboard

## Objective

## DOKUMEN 1
Membantu pegawai mahkamah seperti Registrar dan Assistant Registrar memantau operasi harian.

Suggested KPI Cards

## New Filings Today
## Cases Pending Registration
## Cases Pending Allocation
## Mentions Today
## Hearings Today
## Notices Pending

## Sample Data

## Metric | Value
## New Filings Today | 9
## Pending Registration | 4
## Pending Allocation | 3
## Mentions Today | 6
## Hearings Today | 8
## Notices Pending | 2

## Sample Filing Queue

Filing ID | Submitted By | Case Type | Date | Status
## F1001 | Tay Hwee Lan | Unfair Dismissal | 2026-03-05 | Pending Review
## F1002 | Azman Bin Isa | Unfair Dismissal | 2026-03-05 | Pending Review
## F1003 | Ravi Kumar | Constructive Dismissal | 2026-03-05 | Pending Review
## F1004 | Ahmad Faiz | Termination | 2026-03-05 | Approved

## Sample Hearing Schedule

## Time | Case | Courtroom | Chairman

## DOKUMEN 1
09:00 | Tay Hwee Lan v Healthy Vision | Mahkamah 1 | YA Dato Wan Jeffry Kassim
11:00 | Azman Bin Isa v Technip Energies | Mahkamah 1 | YA Dato Wan Jeffry Kassim
14:30 | Siti Nurhaliza v ABC Sdn Bhd | Mahkamah 4 | YA Tuan Amrik Singh
09:30 | Kesatuan Sekerja v Kilang Automotif Jaya | Mahkamah 2 | YA Puan Rusita Md Lazim

## ---

## Chairman Dashboard

## Objective
Memberikan paparan khusus kepada pengerusi mahkamah untuk memantau kes yang ditugaskan kepada mereka.

Suggested KPI Cards

## Assigned Cases
## Hearings This Week
## Mentions This Week
## Awards Pending
## Cases Closed This Month

## Sample Data

## Metric | Value
## Assigned Cases | 28
## Hearings This Week | 6
## Mentions This Week | 4
## Awards Pending | 3
## Cases Closed This Month | 5

## Assigned Case List

## Case Number | Case Title | Status | Hearing Date

## DOKUMEN 1
1/1-1522/25 | Tay Hwee Lan v Healthy Vision | Hearing | 12 Mar 2026
1/1-1079/25 | Azman Bin Isa v Technip Energies | Trial | 12 Mar 2026
4/4-2024/25 | Siti Nurhaliza v ABC Sdn Bhd | Mention | 14 Mar 2026
2/2-3041/25 | Kesatuan Sekerja v Kilang Automotif | Hearing | 15 Mar 2026

## ---

## Award Analytics Dashboard

## Objective
Menganalisis penggunaan modul carian Award dan penerbitan keputusan kes.

Suggested KPI Cards

## Total Awards Published
## Awards Published This Year
## Search Queries Today
## Top Downloaded Award
## Search Success Rate

## Sample Data

## Metric | Value
## Total Awards Published | 8421
## Awards Published 2026 | 312
## Search Queries Today | 924
## Search Success Rate | 92%
Top Downloaded Award | Sarah Lee v Bintang Retail Group

## Award Download Statistics

## Award Title | Chairman | Downloads

## DOKUMEN 1
Sarah Lee v Bintang Retail Group | YA Dato Syed Noh Said | 284
Harun v Maju Tech | YA Tuan Amrik Singh | 233
Noraini v Apex Global | YA Dato Wan Jeffry Kassim | 187
Raj Kumar v Delta Freight | YA Tuan Zulhelmy Hasan | 129

## Top Search Keywords

## Keyword | Searches
unfair dismissal | 412
constructive dismissal | 238
collective agreement | 179
trade dispute | 95

## ---

## Integration Monitoring Dashboard

## Objective
Memantau transaksi integrasi sistem seperti MyDigital ID dan JPPM.

Suggested KPI Cards

API Success Rate
## Failed Transactions
## Authentication Success Rate
Average API Response Time
## Retry Queue

## Sample Data

## Metric | Value
API Success Rate | 97.2%

## DOKUMEN 1
## Failed Transactions | 14
## Authentication Success Rate | 99.1%
Average Response Time | 820 ms
## Retry Queue | 5

## Integration Log

Txn ID | System | Type | Status | Response Time
I3001 | JPPM | Case Sync | Success | 842 ms
I3002 | JPPM | Case Sync | Success | 921 ms
I3003 | MyDigital ID | Authentication | Success | 530 ms
I3004 | MyDigital ID | Authentication | Failed | 2200 ms
I3005 | JPPM | Case Sync | Failed | 4100 ms

## ---

## System Usage Dashboard

## Objective
Menilai tahap penggunaan sistem oleh pelbagai jenis pengguna.

Suggested KPI Cards

## Daily Active Users
## Monthly Active Users
## Total Logins Today
## Most Used Module
## Average Session Duration

## Sample Data

## Metric | Value

## DOKUMEN 1
## Daily Active Users | 376
## Monthly Active Users | 1242
## Logins Today | 182
Most Used Module | eFiling
Average Session Duration | 18 minutes

Usage by Role

## Role | Active Users
## Registrar | 12
## Chairman | 8
## Lawyers | 32
## Claimants | 45
## Public Users | 280

## Module Usage

## Module | Usage Count
eFiling | 142
## Case Management | 98
## Award Search | 312
## Hearing Schedule | 74
## Notice Management | 53

## ---

## Sample Case Dataset

## Case Number | Case Title | Case Type | Chairman | Court | Filing Date | Status
1/1-1522/25 | Tay Hwee Lan v Healthy Vision Sdn Bhd | Unfair Dismissal | YA Dato Wan Jeffry Kassim | Mahkamah 1 |
## 2026-01-05 | Hearing

## DOKUMEN 1
1/1-1079/25 | Azman Bin Isa v Technip Energies | Unfair Dismissal | YA Dato Wan Jeffry Kassim | Mahkamah 1 | 2026-01-11 |
## Trial
4/4-2024/25 | Siti Nurhaliza v Syarikat ABC | Termination | YA Tuan Amrik Singh | Mahkamah 4 | 2026-02-01 | Mention
2/2-3041/25 | Kesatuan Sekerja v Kilang Automotif Jaya | Collective Agreement | YA Puan Rusita Md Lazim | Mahkamah 2 |
## 2026-01-22 | Hearing
5/5-1120/25 | Ahmad Faiz v Global Tech Solutions | Unfair Dismissal | YA Tuan Zulhelmy Hasan | Mahkamah 5 | 2026-02-10 |
## Mention

## ---

## Suggested Dashboard Visual Components

KPI Cards for headline metrics
Line charts for trends over time
Bar charts for comparison by chairman or court
Donut charts for case status distribution
Calendar view for hearing schedule
Data tables for drill-down details

## ---

AI Prompt for Generating Demo Data

Generate realistic Malaysian Industrial Court operational data for a digital court platform called eMP v2.0.

## Requirements:
- Output CSV datasets
- Cases: 150 rows
- Hearings: 300 rows
- Awards: 80 rows
- Filings: 200 rows
- Notices: 250 rows

## DOKUMEN 1
- Integration logs: 500 rows
- User usage stats: 90 rows

Use realistic Malaysian names, company names, unions, chairman titles and courtroom labels.

Include case types:
## Unfair Dismissal
## Constructive Dismissal
## Collective Agreement
## Trade Dispute
Termination of Service

Include realistic case statuses:
## Filing Review
## Registered
## Allocation Pending
## Mention
## Hearing
## Award Pending
## Award Published

Dates must be between Jan 2026 and Jun 2026.

Ensure relationships:
hearings reference case numbers
awards reference case numbers
notices reference case numbers
integration logs simulate JPPM and MyDigital ID activity

Ensure the dataset produces meaningful charts for dashboard prototypes.

## ---

## DOKUMEN 1

End of Dashboard Analytics Brief


## DASHBOARD FEEDBACK

## DOKUMEN 1




## None
## DOKUMEN 1
# eMP v2.0 Analytics & Reporting Dashboard Specification
Mahkamah Perusahaan Malaysia (Industrial Court)

Dokumen ini menyediakan **brief analitik dan laporan dashboard** untuk sistem eMP v2.0. Ia direka untuk membantu
**pengurusan mahkamah, pegawai mahkamah dan pengerusi mahkamah** memahami prestasi operasi, aliran kes, kecekapan
perbicaraan serta trend pertikaian pekerjaan di Malaysia.

The analytics module must support **year-based reporting**, **trend analysis**, and **interactive filtering**.

Filtering requirement:
## - Year (2019 – 2026)
## - Court Location
## - Case Type
## - Chairman
## - Case Status

## ---

## # Dashboard Category Structure

The analytics dashboard will contain the following sections:

## 1. Case Registration & Resolution
## 2. Case Type Analysis
## 3. Case Lifecycle Performance
## 4. Court Performance
## 5. Chairman Performance
## 6. Hearing Performance
## 7. Pleading & Document Analytics
## 8. Award Analytics
## 9. Operational Risk Monitoring
## 10. Historical Trend Analysis

## DOKUMEN 1

## ---

# 1. Case Registration and Resolution of Unfair Dismissal Cases by Year
# Pendaftaran dan Penyelesaian Kes Pembuangan Kerja Mengikut Tahun

## Chart Type
## Bar Chart

## Description
This dashboard shows the number of unfair dismissal cases registered and resolved annually.

## Data Range
## 2019 – 2026

## Sample Data

## | Year | Cases Registered | Cases Resolved |
## |-----|-----------------|---------------|
## | 2019 | 820 | 745 |
## | 2020 | 756 | 689 |
## | 2021 | 912 | 801 |
## | 2022 | 1,034 | 912 |
## | 2023 | 1,148 | 1,021 |
## | 2024 | 1,206 | 1,102 |
## | 2025 | 1,278 | 1,156 |
## | 2026 | 1,321 | 1,188 |

## Insight
Allows court management to track backlog trends and dispute growth.

## ---

## DOKUMEN 1

# 2. Types of Unfair Dismissal Cases Resolved (2019 – 2026)
## # Jenis Kes Pembuangan Kerja Yang Diselesaikan Mengikut Tahun (2019 – 2026)

## Chart Type
## Stacked Bar Chart

## Description
Displays the breakdown of types of unfair dismissal cases resolved each year.

## Sample Data

| Year | Direct Dismissal | Constructive Dismissal | Retrenchment | Termination Dispute |
## |----|----|----|----|----|
## | 2019 | 412 | 126 | 109 | 98 |
## | 2020 | 378 | 118 | 102 | 91 |
## | 2021 | 451 | 140 | 110 | 100 |
## | 2022 | 512 | 162 | 123 | 115 |
## | 2023 | 548 | 170 | 138 | 121 |
## | 2024 | 572 | 184 | 142 | 129 |
## | 2025 | 603 | 195 | 150 | 140 |
## | 2026 | 620 | 201 | 159 | 152 |

## Insight
Helps identify dispute patterns and economic labour trends.

## ---

# 3. Total Cases Registered by Case Category per Year
## # Jumlah Kes Didaftarkan Mengikut Kategori Kes Setiap Tahun

## Chart Type

## DOKUMEN 1
## Bar Chart

| Year | Unfair Dismissal | Collective Agreement | Trade Dispute | Union Recognition |
## |----|----|----|----|----|
## | 2019 | 820 | 84 | 63 | 22 |
## | 2020 | 756 | 72 | 58 | 19 |
## | 2021 | 912 | 91 | 71 | 24 |
## | 2022 | 1,034 | 108 | 83 | 29 |
## | 2023 | 1,148 | 122 | 95 | 31 |
## | 2024 | 1,206 | 131 | 102 | 36 |
## | 2025 | 1,278 | 142 | 114 | 40 |
## | 2026 | 1,321 | 148 | 121 | 45 |

## ---

# 4. Average Case Duration by Year
## # Tempoh Purata Penyelesaian Kes Mengikut Tahun

## Chart Type
## Line Chart

| Year | Average Case Duration (Months) |
## |----|----|
## | 2019 | 10.8 |
## | 2020 | 10.5 |
## | 2021 | 10.2 |
## | 2022 | 9.8 |
## | 2023 | 9.5 |
## | 2024 | 9.2 |
## | 2025 | 9.1 |
## | 2026 | 8.9 |


## DOKUMEN 1
## Insight
Shows improvement in judicial efficiency.

## ---

# 5. Court Case Distribution by Location
## # Taburan Kes Mahkamah Mengikut Lokasi

## Chart Type
## Horizontal Bar Chart

## | Court Location | Active Cases |
## |----|----|
## | Kuala Lumpur | 284 |
## | Selangor | 312 |
## | Johor | 176 |
## | Penang | 142 |
## | Perak | 118 |
## | Sabah | 95 |
## | Sarawak | 82 |

## ---

## # 6. Chairman Workload Analysis
## # Analisis Beban Kerja Pengerusi Mahkamah

## Chart Type
## Bar Chart

## | Chairman | Active Cases | Awards Issued |
## |----|----|----|
| Y.A. Dato’ Wan Jeffry Bin Kassim | 121 | 9 |

## DOKUMEN 1
| Y.A. Tuan Amrik Singh | 112 | 11 |
| Y.A. Tuan Zuhlhelmy Bin Hasan | 96 | 8 |
| Y.A. Dato’ Syed Noh Bin Said | 101 | 10 |

## Insight
Helps balance case distribution.

## ---

# 7. Hearing Utilisation Rate by Year
## # Kadar Penggunaan Sesi Perbicaraan Mengikut Tahun

## Chart Type
## Line Chart

## | Year | Hearings Scheduled | Hearings Completed |
## |----|----|----|
## | 2019 | 1,122 | 1,051 |
## | 2020 | 1,034 | 970 |
## | 2021 | 1,178 | 1,112 |
## | 2022 | 1,245 | 1,191 |
## | 2023 | 1,328 | 1,267 |
## | 2024 | 1,401 | 1,344 |
## | 2025 | 1,468 | 1,420 |
## | 2026 | 1,512 | 1,468 |

## ---

## # 8. Pleading Filing Performance
## # Prestasi Pemfailan Pleading

## Chart Type

## DOKUMEN 1
## Stacked Bar Chart

| Year | SOC Filed | SIR Filed | Rejoinder Filed |
## |----|----|----|----|
## | 2019 | 720 | 694 | 412 |
## | 2020 | 688 | 642 | 398 |
## | 2021 | 821 | 788 | 456 |
## | 2022 | 901 | 867 | 502 |
## | 2023 | 982 | 942 | 540 |
## | 2024 | 1,041 | 998 | 590 |
## | 2025 | 1,102 | 1,051 | 620 |
## | 2026 | 1,158 | 1,108 | 648 |

## ---

## # 9. Award Decision Outcome Distribution
## # Taburan Keputusan Award

## Chart Type
## Pie Chart

## | Award Outcome | Cases |
## |----|----|
## | Claim Dismissed | 21 |
## | Reinstatement | 19 |
## | Compensation | 16 |
## | Settlement Recorded | 8 |

## ---

## # 10. Backlog Case Monitoring
## # Pemantauan Kes Tertunggak

## DOKUMEN 1

## Chart Type
## Bar Chart

## | Year | Backlog Cases |
## |----|----|
## | 2019 | 84 |
## | 2020 | 91 |
## | 2021 | 73 |
## | 2022 | 61 |
## | 2023 | 54 |
## | 2024 | 48 |
## | 2025 | 42 |
## | 2026 | 39 |

## ---

## # Suggested Dashboard Layout

Top KPI Section

## Total Active Cases
New Cases (Month)
Cases Closed (Month)
## Backlog Cases

## Middle Section

Monthly Case Trend (Bar Chart)
Case Type Distribution (Stacked Bar Chart)

## Lower Section

## DOKUMEN 1

Chairman Performance (Bar Chart)
Case Lifecycle Trend (Line Chart)

## Bottom Section

## Award Analytics
## Operational Risk Monitoring

## ---

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


## DOKUMEN 1
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

## ---

This analytics structure ensures eMP v2.0 supports:

## None
## DOKUMEN 1

Operational monitoring
Judicial efficiency tracking
Labour dispute trend analysis
Court management decision support



