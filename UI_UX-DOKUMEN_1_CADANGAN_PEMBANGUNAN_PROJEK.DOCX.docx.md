

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

## DOKUMEN 1

Operational monitoring
Judicial efficiency tracking
Labour dispute trend analysis
Court management decision support















## DOKUMEN 1
Feedback M10: Pengurusan kes


## None
## DOKUMEN 1



#  eMP v2.0 – MODUL PENGURUSAN KES (M10)
## ### UI/UX PROTOTYPE BRIEF (ANTIGRAVITY / GEMINI READY)

## DOKUMEN 1

## ---

## # 吝 1. OVERVIEW

Modul Pengurusan Kes (M10) merupakan modul teras dalam sistem eMP v2.0 yang mengurus keseluruhan kitaran hayat kes bermula
daripada pendaftaran sehingga penutupan kes (award).

Prototype perlu memaparkan:
- Aliran kes end-to-end (lifecycle)
- Paparan berpusat (single source of truth)
- Interaksi antara modul (e-Filing, Pendaftaran, e-Sebutan, Jadual, Award)

## ---

## #  2. USER ROLES

## ```
## Internal:
## - YDP
## - Chairman
## - Registrar / Assistant Registrar
## - Pegawai Mahkamah

## External:
## - Claimant
## - Respondent
## - Lawyer
## - Union Representative
## ```

## ---

## DOKUMEN 1

## #  3. USER FLOW

## ```
## Login
## ↓
## Dashboard / Workspace
## ↓
## Case List
## ↓
## Case Detail
## ↓
Manage Case (Docs / Timeline / Hearing)
## ↓
## Hearing / Mention / Mediation
## ↓
## Award
## ↓
## Case Closed
## ```

## ---

## # 里 4. SCREEN 1 – CASE LIST VIEW

## ##  Objective
Paparan senarai semua kes untuk pengguna

## ## 隣 UI COMPONENTS

## ```
- Search Bar (Case No / Name / Keyword)

## DOKUMEN 1
## - Filters:
## - Year
## - Court
## - Status
## - Case Type
## - Case Table
## - Quick Action Button
## ```

## ##  SAMPLE DATA

## ```json
## [
## {
## "case_number": "1/1-1522/25",
"case_title": "Tay Hwee Lan v Healthy Vision Sdn Bhd",
"case_type": "Unfair Dismissal",
"status": "Hearing",
"court": "Mahkamah 1",
"chairman": "YA Dato Wan Jeffry Kassim",
"next_action": "Join Hearing",
## "hearing_date": "2026-03-12"
## },
## {
## "case_number": "1/1-1079/25",
"case_title": "Azman Bin Isa v Technip Energies",
"case_type": "Unfair Dismissal",
"status": "Trial",
"court": "Mahkamah 1",
"chairman": "YA Dato Wan Jeffry Kassim",
"next_action": "Upload Documents",
## "hearing_date": "2026-03-20"

## DOKUMEN 1
## },
## {
## "case_number": "4/4-2024/25",
"case_title": "Siti Nurhaliza v ABC Sdn Bhd",
"case_type": "Termination",
"status": "Mention",
"court": "Mahkamah 4",
"chairman": "YA Tuan Amrik Singh",
"next_action": "Attend Mention",
## "hearing_date": "2026-04-02"
## }
## ]
## ```

## ---

## # 里 5. SCREEN 2 – CASE DETAIL VIEW (CORE)

## ##  Objective
Paparan penuh satu kes (central control panel)

## ## 隣 LAYOUT

## ```
## HEADER:
## - Case Number
## - Case Title
## - Status Badge
## - Chairman
## - Court

## TABS:

## DOKUMEN 1
## - Overview
## - Parties
## - Timeline
## - Documents
## - Hearings
## - Notes
## - Award
## ```

## ---

## # 里 6. TAB: OVERVIEW

## ##  SAMPLE DATA

## ```json
## {
## "case_number": "1/1-1522/25",
"case_title": "Tay Hwee Lan v Healthy Vision Sdn Bhd",
"case_type": "Unfair Dismissal",
"status": "Hearing",
## "filing_date": "2026-01-05",
## "assigned_date": "2026-01-12",
"court": "Mahkamah 1",
"chairman": "YA Dato Wan Jeffry Kassim"
## }
## ```

## ---

## # 里 7. TAB: PARTIES


## DOKUMEN 1
## ##  SAMPLE DATA

## ```json
## {
"claimant": "Tay Hwee Lan",
"respondent": "Healthy Vision Sdn Bhd",
"claimant_lawyer": "Messrs Lee & Co",
"respondent_lawyer": "Messrs Tan & Partners"
## }
## ```

## ---

## # 里 8. TAB: TIMELINE (CRITICAL)

## ##  Design:
Vertical timeline / stepper UI

## ##  SAMPLE DATA

## ```json
## [
{"event": "Filing Submitted", "date": "2026-01-05", "status": "completed"},
{"event": "Case Registered", "date": "2026-01-10", "status": "completed"},
{"event": "Case Assigned", "date": "2026-01-12", "status": "completed"},
{"event": "Mention", "date": "2026-02-15", "status": "completed"},
{"event": "Hearing", "date": "2026-03-12", "status": "active"},
{"event": "Award", "date": null, "status": "pending"}
## ]
## ```

## ---

## DOKUMEN 1

## # 里 9. TAB: DOCUMENTS

## ##  Features:
## - Upload
## - Download
- Version tracking

## ##  SAMPLE DATA

## ```json
## [
## {
"name": "Statement of Claim",
"type": "PDF",
"uploaded_by": "Claimant",
## "date": "2026-01-05"
## },
## {
"name": "Statement in Reply",
"type": "PDF",
"uploaded_by": "Respondent",
## "date": "2026-01-20"
## },
## {
"name": "Evidence Bundle",
"type": "PDF",
"uploaded_by": "Lawyer",
## "date": "2026-03-01"
## }
## ]
## ```

## DOKUMEN 1

## ---

## # 里 10. TAB: HEARINGS / MENTIONS

## ##  SAMPLE DATA

## ```json
## [
## {
## "date": "2026-02-15",
"type": "Mention",
"status": "Completed",
"action": "View Summary"
## },
## {
## "date": "2026-03-12",
"type": "Hearing",
"status": "Upcoming",
"action": "Join Session"
## }
## ]
## ```

## ---

## # 里 11. TAB: NOTES / PROCEEDINGS

## ##  SAMPLE DATA

## ```json
## [

## DOKUMEN 1
## {
"author": "Chairman",
"note": "Parties requested additional time to submit documents.",
## "date": "2026-02-15"
## },
## {
"author": "Registrar",
"note": "Documents verified and accepted.",
## "date": "2026-02-20"
## }
## ]
## ```

## ---

## # 里 12. TAB: AWARD

## ##  SAMPLE DATA

## ```json
## {
"award_status": "Pending",
"decision": null,
"uploaded_by": null,
"date": null
## }
## ```

## ---

## # ⚙ 13. ROLE-BASED ACTIONS


## DOKUMEN 1
## ## Chairman:
## - Add Notes
## - Upload Award

## ## Registrar:
## - Validate Documents
## - Update Status

## ## External User:
## - Upload Documents
## - View Case Status

## ---

## #  14. MODULE INTEGRATION

## ```
e-Filing → Input kes
Pendaftaran Kes → Generate case number
Pengurusan Kes → Manage lifecycle
e-Sebutan → Hearing session
## Jadual Mahkamah → Scheduling
Award → Final decision
## Dashboard → Analytics
## ```

## ---

## #  15. DESIGN PRINCIPLES

- Single Case = Single View (no fragmentation)
- Timeline-driven UI

## DOKUMEN 1
- Action-based UX (Next Action)
- Role-Based Access (RBAC)
- Mobile-first (tablet friendly)
- Clean legal UI (minimal clutter)

## ---

## #  16. PROTOTYPE INSTRUCTION (ANTIGRAVITY)

Gunakan struktur berikut:

## ```
Create a case management system UI with:

- Case list table with filters
- Case detail page with tabs:
## Overview, Parties, Timeline, Documents, Hearings, Notes, Award
- Vertical timeline view
- Role-based action buttons
- Clean, modern government UI
- Blue/white theme (official system)
- Responsive layout (desktop + tablet)
## ```

## ---

## #  KEY INSIGHT (FOR DESIGN TEAM)

Ini bukan sekadar UI:
 Ini adalah **Case Lifecycle System**

## Focus:

## None
## DOKUMEN 1
- bukan list sahaja
- tetapi progression + action + decision

## Outcome:
 UI nampak real system, bukan mockup kosong
## ```




FEEDBACK M5 - eSebutan

#  eMP v2.0 – MODUL e-SEBUTAN & MEDIASI (ADR)
## ### UI/UX PROTOTYPE BRIEF (WITH USER STORY & SAMPLE DATA)

## ---

## # 吝 1. OVERVIEW

Modul e-Sebutan & Mediasi (ADR) membolehkan pelaksanaan prosiding mahkamah secara dalam talian termasuk sesi sebutan,
perbicaraan dan rundingan damai. Modul ini perlu menyokong kehadiran pelbagai pihak termasuk **Lawyer (Peguam)** sebagai
aktor utama dalam prosiding.

Prototype perlu menunjukkan:
- aliran penuh sesi mahkamah digital

## DOKUMEN 1
- interaksi pelbagai peranan (multi-actor interaction)
- kawalan sesi yang tersusun (bukan sekadar video call biasa)

## ---

## #  2. USER ROLES

## ```
## Internal:
- Chairman (Pengerusi)
## - Registrar / Pegawai Mahkamah

## External:
- Claimant (Pekerja)
- Respondent (Majikan)
- Lawyer (Peguam)
## ```

## ---

## #  3. USER STORY (SENARIO REAL)

## ##  Senario: Kes Pembuangan Kerja Tidak Adil

###  Perspektif Lawyer (Claimant)

## ```
Sebagai seorang peguam kepada pihak penuntut,
Saya ingin menyertai sesi e-Sebutan secara dalam talian,
Supaya saya boleh mewakili anak guam saya tanpa perlu hadir secara fizikal ke mahkamah.
## ```


## DOKUMEN 1
## ### ॕ Perspektif Chairman

## ```
## Sebagai Pengerusi Mahkamah,
Saya ingin mengawal sesi e-Sebutan,
Supaya prosiding berjalan secara tersusun dan semua pihak dapat didengar.
## ```

## ###  Perspektif Respondent

## ```
Sebagai wakil majikan,
Saya ingin menyertai sesi sebutan dan rundingan damai,
Supaya kes dapat diselesaikan tanpa perlu melalui perbicaraan penuh.
## ```

## ---

## #  4. END-TO-END FLOW

## ```
## Notifikasi Sesi
## ↓
## Login Sistem
## ↓
## Pilih Kes
## ↓
## Paparan Sesi Akan Datang
## ↓
## Masuk Waiting Room
## ↓
Diluluskan oleh Chairman

## DOKUMEN 1
## ↓
## Masuk Live Session
## ↓
(Opsyen) Masuk Mediation Room
## ↓
## Sesi Tamat
## ↓
## Log Sesi Direkodkan
## ```

## ---

## # 里 5. SCREEN 1 – UPCOMING SESSION

## ##  Objective
Paparan sesi yang dijadualkan

## ---

## ## 隣 COMPONENTS

## ```
## - Case Info
## - Session Date & Time
## - Status Badge
## - Join Button
## ```

## ---

## ##  SAMPLE DATA


## DOKUMEN 1
## ```json
## {
## "case_number": "1/1-1522/25",
"case_title": "Tay Hwee Lan v Healthy Vision Sdn Bhd",
"session_type": "Hearing",
## "date": "2026-03-12",
"time": "10:00 AM",
"status": "Upcoming",
"court": "Mahkamah 1"
## }
## ```

## ---

## # 里 6. SCREEN 2 – WAITING ROOM

## ##  Objective
Ruang menunggu sebelum masuk sesi

## ---

## ## 隣 COMPONENTS

## ```
## - Countdown Timer
## - Participant List
## - Status: Waiting Approval
- Button: Request to Join
## ```

## ---


## DOKUMEN 1
## ##  SAMPLE DATA

## ```json
## {
"session_id": "ESB-2026-001",
"status": "Waiting",
## "participants": [
{"name": "YA Dato Wan Jeffry Kassim", "role": "Chairman"},
{"name": "Tay Hwee Lan", "role": "Claimant"},
{"name": "Messrs Lee & Co", "role": "Lawyer"},
{"name": "Healthy Vision Sdn Bhd", "role": "Respondent"}
## ]
## }
## ```

## ---

## # 里 7. SCREEN 3 – LIVE SESSION

## ##  Objective
Paparan utama prosiding

## ---

## ## 隣 COMPONENTS

## ```
## - Video Panel
- Participant List (Role-based)
## - Chat Panel
- Session Control (Mute / Raise Hand)
## ```

## DOKUMEN 1

## ---

## ##  SAMPLE DATA

## ```json
## {
"status": "Live",
## "participants": [
{"name": "Chairman", "status": "Speaking"},
{"name": "Lawyer", "status": "Listening"},
{"name": "Respondent", "status": "Listening"}
## ]
## }
## ```

## ---

## # 里 8. SCREEN 4 – MEDIATION ROOM (ADR)

## ##  Objective
Ruang rundingan damai

## ---

## ## 隣 COMPONENTS

## ```
## - Private Video Room
## - Restricted Participants
## - Chat & Notes
## ```

## DOKUMEN 1

## ---

## ##  SAMPLE DATA

## ```json
## {
"room": "Mediation",
"status": "In Progress",
## "participants": [
{"name": "Claimant"},
{"name": "Respondent"},
{"name": "Chairman"}
## ]
## }
## ```

## ---

## # 里 9. SCREEN 5 – SESSION LOG

## ##  Objective
Rekod sesi

## ---

## ##  SAMPLE DATA

## ```json
## [
## {
## "date": "2026-02-15",

## DOKUMEN 1
"type": "Mention",
"status": "Completed",
"summary": "Case proceed to hearing"
## },
## {
## "date": "2026-03-12",
"type": "Hearing",
"status": "Completed",
"summary": "Evidence submitted"
## }
## ]
## ```

## ---

## # ⚙ 10. ROLE-BASED ACTIONS

## ## Chairman:
- Approve entry
- Start / End session
- Move to mediation

## ## Registrar:
- Monitor session
- Record notes

## ## Lawyer:
- Join session
- Represent client
- Participate in discussion

## ## Claimant / Respondent:

## DOKUMEN 1
- Join session
- Engage in mediation

## ---

## #  11. INTEGRATION

## ```
Case Management → case reference
Court Schedule → session timing
Notification → reminders
Document Module → reference docs
## ```

## ---

## #  12. DESIGN PRINCIPLES

- Courtroom-style UI (formal)
- Role clearly visible
- Structured interaction (not free-form)
- Minimal clutter
## - Tablet-friendly

## ---

## #  13. ANTIGRAVITY PROMPT

## ```
Design a virtual court hearing system with:

- Role-based participants (Chairman, Lawyer, Claimant, Respondent)

## DOKUMEN 1
- Waiting room with approval flow
- Live session interface (video + chat)
- Mediation room (private session)
- Session history log
- Clean government UI
- Responsive (desktop + tablet)
## ```

## ---

## #  KEY INSIGHT

 Ini bukan Zoom / Google Meet

##  Ini:
**Structured Virtual Court System**

## Focus:
- controlled interaction
- legal workflow
- role-based authority

## Outcome:
 Prototype nampak real mahkamah digital system





## None
## DOKUMEN 1
M10 - Modul Pengurusan Award apart of Pengurusan kes lifecycle.

#  eMP v2.0 – MODUL PENGURUSAN AWARD
## ### UI/UX PROTOTYPE BRIEF (TENDER-ALIGNED + SAMPLE DATA)

## ---

## # 吝 1. OVERVIEW

Modul Pengurusan Award menyokong proses penyediaan, semakan, kelulusan dan penerbitan keputusan kes (award) dalam sistem
eMP v2.0. Modul ini merupakan peringkat akhir dalam kitaran hayat kes selepas prosiding selesai.

Modul ini mesti menunjukkan bahawa:
- award adalah sebahagian daripada lifecycle kes
- keputusan disediakan oleh Chairman
- melalui proses semakan sebelum diterbitkan
- dan akhirnya boleh dicapai melalui modul Carian Pintar Award

## ---

## #  2. MAPPING MODUL (TENDER)

## ```
## Lifecycle:
e-Filing → Pendaftaran → M10 Pengurusan Kes → e-Sebutan → Pengurusan Award → Carian Award
## ```

 Modul berkaitan:

## DOKUMEN 1
## - M10 Pengurusan Kes
- e-Sebutan
## - Carian Pintar Award
## - Dashboard & Laporan

## ---

## #  3. ACTORS

## ## Internal
- Chairman / YDP (Primary Decision Maker)
## - Registrar / Pegawai Mahkamah

## External (View Only)
## - Lawyer
## - Claimant
## - Respondent
## - Public User

## ---

## #  4. USER STORY

## ## Chairman
## Sebagai Pengerusi Mahkamah,
Saya ingin menyediakan dan meluluskan award,
Supaya keputusan kes direkodkan secara rasmi.

## ## Registrar
Sebagai pegawai mahkamah,
Saya ingin menyemak dan mengurus status award,
Supaya penerbitan keputusan adalah teratur.

## DOKUMEN 1

## ## Public User
Sebagai pengguna awam,
Saya ingin mencari dan membaca award,
Supaya saya boleh merujuk kes terdahulu.

## ---

## #  5. PROCESS FLOW

## ```
Kes selesai (Hearing Completed)
## ↓
Chairman buka Case Detail
## ↓
Klik "Create Award"
## ↓
## Draft Award
## ↓
## Semakan (optional)
## ↓
## Approve Award
## ↓
## Publish Award
## ↓
Indexed ke Carian Pintar Award
## ```

## ---

## # 吝 6. UI FLOW (DALAM PROTOTYPE)


## DOKUMEN 1
## ```
Dashboard (Chairman)
## ↓
## Assigned Cases
## ↓
## Case Detail Page
## ↓
Tab: "Award"
## ↓
## Award Workspace
## ```

## ---

## # 里 7. SCREEN BREAKDOWN

## ---

## ## 里 SCREEN 1 – CASE DETAIL (READY FOR AWARD)

### UI Components
## - Case Header
- Status: "Ready for Award"
- Timeline (Completed Hearing)
- Button: "Create Award"

## ### Sample Data

## ```json
## {
## "case_number": "1/1-1522/25",
"case_title": "Tay Hwee Lan v Healthy Vision Sdn Bhd",

## DOKUMEN 1
"case_type": "Unfair Dismissal",
"court": "Mahkamah 1",
"chairman": "YA Dato Wan Jeffry Kassim",
"status": "Ready for Award",
## "hearing_completed_date": "2026-03-12"
## }
## ```

## ---

## ## 里 SCREEN 2 – AWARD DRAFT WORKSPACE

### UI Components

## ```
## LEFT PANEL:
## - Case Info Summary
## - Timeline

## MAIN PANEL:
## - Award Title
## - Decision Summary
## - Award Outcome Dropdown
## - Rich Text Editor (optional)

## RIGHT PANEL:
## - Metadata
## - Status
## ```

## ### Award Outcome Options


## DOKUMEN 1
## - Dismissed
## - Reinstatement
## - Compensation
## - Settlement
## - Other Order

## ---

## ### Sample Data

## ```json
## {
"award_id": "TEMP-001",
## "case_number": "1/1-1522/25",
"award_status": "Draft",
"award_title": "Award for Unfair Dismissal Case",
"decision_summary": "Mahkamah mendapati pembuangan kerja adalah tanpa sebab yang adil.",
"award_outcome": "Compensation",
## "award_date": "2026-03-25",
"chairman": "YA Dato Wan Jeffry Kassim"
## }
## ```

## ---

## ## 里 SCREEN 3 – REVIEW & APPROVAL

### UI Components

## ```
## - Award Summary Card
## - Decision Outcome

## DOKUMEN 1
## - Uploaded Document Preview
## - Status Badge
## - Approve Button
- Return to Draft Button
## ```

## ---

## ### Sample Data

## ```json
## {
## "case_number": "1/1-1522/25",
"award_status": "Under Review",
"decision_summary": "Dismissal without just cause",
"award_outcome": "Compensation",
"review_status": "Ready for Approval"
## }
## ```

## ---

## ## 里 SCREEN 4 – AWARD PUBLISHED

### UI Components

## ```
## - Success Banner
## - Published Date
## - Download Award Button
- Link to Case
- Link to Award Search

## DOKUMEN 1
## ```

## ---

## ### Sample Data

## ```json
## {
"award_id": "AW-2026-00125",
## "case_number": "1/1-1522/25",
"award_status": "Published",
## "published_date": "2026-03-26",
"award_outcome": "Compensation",
"document_url": "/awards/AW-2026-00125.pdf"
## }
## ```

## ---

## ## 里 SCREEN 5 – AWARD IN CASE TIMELINE

### UI Components

## ```
## - Timeline
## - Event: Award Published
## - Download Button
## ```

## ---

## ### Sample Timeline

## DOKUMEN 1

## ```json
## [
{"event": "Filing Submitted", "date": "2026-01-05"},
{"event": "Case Registered", "date": "2026-01-10"},
{"event": "Hearing Completed", "date": "2026-03-12"},
{"event": "Award Published", "date": "2026-03-26"}
## ]
## ```

## ---

## #  8. AWARD LIST (FOR SEARCH MODULE)

## ```json
## [
## {
"award_id": "AW-2026-00125",
## "case_number": "1/1-1522/25",
"title": "Tay Hwee Lan v Healthy Vision",
## "year": 2026,
"outcome": "Compensation"
## },
## {
"award_id": "AW-2026-00130",
## "case_number": "1/1-1079/25",
"title": "Azman v Technip",
## "year": 2026,
"outcome": "Dismissed"
## }
## ]
## ```

## DOKUMEN 1

## ---

## # ⚙ 9. ROLE ACTION

## | Role | Action |
## |-----|-------|
| Chairman | Create, edit, approve award |
| Registrar | Assist, validate, manage |
| User | View published award only |

## ---

## #  10. INTEGRATION

## ```
M10 → Case lifecycle
e-Sebutan → Hearing completion
Award → Final output
## Search → Repository
Dashboard → KPI
## ```

## ---

## #  11. DESIGN PRINCIPLES

- Clean legal UI
- Document-first design
- Strong status visibility
- Minimal distraction
## - Tablet-friendly

## DOKUMEN 1

## ---

## #  12. ANTIGRAVITY PROMPT

## ```
Design an Industrial Court award management system with:

- Case-based award drafting
- Decision summary input
- Approval workflow
- Published award view
- Clean government UI
- Professional legal design
## ```

## ---

## #  KEY MESSAGE

 Ini bukan “upload PDF”

##  Ini:
**Structured Court Decision Workflow**

 Prototype mesti tunjuk:
- authority
- process
- traceability



## None
## DOKUMEN 1

## M8 - Carian Pintar Award.

#  eMP v2.0 – MODUL CARIAN PINTAR AWARD
## ### UI/UX PROTOTYPE BRIEF (END-TO-END + SAMPLE DATA)

## ---

## # 吝 1. OVERVIEW

Modul Carian Pintar Award membolehkan pengguna mencari, menapis dan mengakses keputusan kes (award) yang telah diterbitkan
dalam sistem eMP v2.0.

Modul ini bertindak sebagai:
- repositori berpusat bagi semua award
- enjin carian pintar (full-text + semantic search)
- sumber rujukan undang-undang dan kes terdahulu

## ---

## #  2. OBJECTIVE

Modul ini perlu membolehkan:
- carian pantas berdasarkan keyword atau ayat penuh
- cadangan kes berkaitan (semantic)
- penapisan berdasarkan kategori
- paparan keputusan dalam format mudah dibaca

## DOKUMEN 1

## ---

## #  3. ACTORS

## Public (Primary)
- Orang awam
## - Peguam
## - Penyelidik

## ## Internal
## - Pegawai Mahkamah
## - Pengerusi (reference)

## ---

## #  4. SCENARIO

## Scenario 1 – Lawyer cari kes rujukan

Seorang peguam ingin mencari kes berkaitan “unfair dismissal compensation”.

 Dia masukkan:
"pembuangan kerja pampasan"

##  Sistem:
- paparkan senarai kes relevan
- highlight keyword
- cadangkan kes serupa

## ---


## DOKUMEN 1
## Scenario 2 – Public user cari keputusan kes

Pengguna awam ingin tahu keputusan kes tertentu.

 Dia search:
"Tay Hwee Lan Healthy Vision"

##  Sistem:
- terus keluarkan award case tersebut
- paparkan summary + dokumen

## ---

## ## Scenario 3 – Research / Analysis

Pegawai ingin lihat trend kes 2025

##  Filter:
## - Year: 2025
## - Case Type: Unfair Dismissal

##  Sistem:
- paparkan senarai filtered award

## ---

## # 易 5. USER STORY

## ## US-SR-001
Sebagai pengguna,
Saya ingin mencari award menggunakan kata kunci,
Supaya saya boleh jumpa kes dengan cepat.

## DOKUMEN 1

## ## US-SR-002
Sebagai peguam,
Saya ingin melihat kes berkaitan secara automatik,
Supaya saya boleh buat rujukan undang-undang.

## ## US-SR-003
Sebagai penyelidik,
Saya ingin menapis kes mengikut kategori,
Supaya saya boleh buat analisis.

## ## US-SR-004
Sebagai pengguna awam,
Saya ingin melihat keputusan kes dengan jelas,
Supaya saya faham hasil kes tersebut.

## ---

## #  6. PROCESS FLOW

## ```
User buka portal
## ↓
Masuk halaman Carian Award
## ↓
Masukkan keyword / query
## ↓
Sistem proses:
- full-text search
- semantic search
## ↓
Paparan hasil carian

## DOKUMEN 1
## ↓
User klik award
## ↓
Paparan detail award
## ```

## ---

## # 吝 7. UI FLOW (PROTOTYPE STRUCTURE)

## ```
## Portal / Dashboard
## ↓
## Menu: Carian Award
## ↓
## Search Page
## ↓
## Result Page
## ↓
## Award Detail Page
## ```

## ---

## # 里 8. SCREEN BREAKDOWN

## ---

## ## 里 SCREEN 1 – SEARCH PAGE

### UI Components


## DOKUMEN 1
## ```
- Search Bar (main focus)
## - Suggested Search Keywords
## - Recent Searches
- Filter Panel (collapsed by default)
## ```

## ---

### Sample UI Text

## ```
"Carian Keputusan Kes"
"Masukkan kata kunci, nama kes atau topik..."
## ```

## ---

## ## 里 SCREEN 2 – SEARCH RESULT LIST

### UI Components

## ```
## - Result List (card/table)
## - Highlighted Keywords
## - Filter Sidebar
- Sort Options (Relevance / Latest)
## ```

## ---

## ### Sample Data

## DOKUMEN 1

## ```json
## [
## {
"award_id": "AW-2026-00125",
"case_title": "Tay Hwee Lan v Healthy Vision Sdn Bhd",
## "year": 2026,
"case_type": "Unfair Dismissal",
"outcome": "Compensation",
"summary": "Mahkamah mendapati pembuangan kerja adalah tanpa sebab munasabah...",
## "relevance_score": 0.95
## },
## {
"award_id": "AW-2026-00130",
"case_title": "Azman Bin Isa v Technip Energies",
## "year": 2026,
"case_type": "Unfair Dismissal",
"outcome": "Dismissed",
"summary": "Mahkamah mendapati tindakan majikan adalah sah...",
## "relevance_score": 0.89
## }
## ]
## ```

## ---

## ## 里 SCREEN 3 – FILTER PANEL

### UI Components

## ```
- Year (Dropdown / Multi-select)

## DOKUMEN 1
## - Case Type
## - Court
## - Outcome
## - Chairman
## ```

## ---

## ### Sample Filter

## ```json
## {
## "year": [2025, 2026],
"case_type": "Unfair Dismissal",
"outcome": "Compensation"
## }
## ```

## ---

## ## 里 SCREEN 4 – AWARD DETAIL VIEW

### UI Components

## ```
## - Case Header
## - Award Summary
## - Full Award Document
## - Download Button
- Related Cases (AI suggestion)
## ```


## DOKUMEN 1
## ---

## ### Sample Data

## ```json
## {
"award_id": "AW-2026-00125",
## "case_number": "1/1-1522/25",
"case_title": "Tay Hwee Lan v Healthy Vision Sdn Bhd",
"court": "Mahkamah 1",
"chairman": "YA Dato Wan Jeffry Kassim",
## "award_date": "2026-03-25",
"outcome": "Compensation",
"decision_summary": "Mahkamah mendapati pembuangan kerja adalah tanpa sebab munasabah...",
"document_url": "/awards/AW-2026-00125.pdf"
## }
## ```

## ---

## ## 里 SCREEN 5 – RELATED CASES (SMART FEATURE)

### UI Components

## ```
- “Kes Berkaitan”
## - Similar Case List
## ```

## ---

## ### Sample Data

## DOKUMEN 1

## ```json
## [
## {
"case_title": "Siti Aminah v XYZ Sdn Bhd",
## "similarity": 0.92
## },
## {
"case_title": "Rahman v ABC Corp",
## "similarity": 0.88
## }
## ]
## ```

## ---

## # ⚙ 9. SEARCH TYPES

## ## Full Text Search
- berdasarkan keyword dalam dokumen

## ## Semantic Search
- berdasarkan maksud
- contoh:
- "pembuangan kerja" → "unfair dismissal"

## ---

## #  10. INTEGRATION

## ```
Award Module → source data

## DOKUMEN 1
Search Engine → query processing
Dashboard → analytics
Portal → public access
## ```

## ---

## #  11. DESIGN PRINCIPLES

- Google-like search simplicity
- Clean UI
- Fast response feel
- Highlight results
- Mobile + tablet friendly

## ---

## #  12. ANTIGRAVITY PROMPT

## ```
Design a legal case search system with:

- Central search bar
- Result list with highlighted keywords
- Filter sidebar
- Award detail page
- Related case suggestions
- Clean government UI
- Responsive design
## ```

## ---

## DOKUMEN 1

## #  13. KEY POSITIONING

 Ini bukan sekadar search

##  Ini:
**Legal Knowledge Engine**

##  Value:
- reference
- research
- transparency

##  Outcome:
- system nampak intelligent
- bukan sekadar database





## None
## DOKUMEN 1
## M11  - Perjanjian Kolektif

#  eMP v2.0 – MODUL PERJANJIAN KOLEKTIF (M11)
## ### UI/UX BRIEF (SIMPLE & STRAIGHTFORWARD FOR DESIGN TEAM)

## ---

## #  1. APA MODUL NI BUAT (SIMPLE)

Modul ini untuk:
- simpan rekod perjanjian antara majikan & kesatuan
- upload dokumen perjanjian
- semak status (aktif / tamat / dalam semakan)
- cari semula perjanjian

 Anggap macam:
**“Google Drive + sistem rekod rasmi untuk Collective Agreement”**

## ---

## #  2. SIAPA GUNA (ROLES)

## ## Internal (utama)
- CA Unit (admin utama modul)
## - Pegawai Mahkamah

## External (optional view)
## - Kesatuan
## - Majikan

## DOKUMEN 1
## - Peguam

 Untuk prototype:
Fokus pada **CA Unit / Pegawai sahaja**

## ---

## # 吝 3. USER JOURNEY (MUDAH FAHAM)

### Flow utama:

## ```
## Login
## ↓
## Masuk Modul Perjanjian Kolektif
## ↓
## Nampak Senarai Perjanjian
## ↓
Klik "Tambah Baru"
## ↓
## Isi Maklumat + Upload Dokumen
## ↓
## Save
## ↓
Boleh cari & buka semula
## ```

## ---

## # 里 4. SCREEN YANG WAJIB ADA

## ## ✅ SCREEN 1 – SENARAI PERJANJIAN (MAIN PAGE)

## DOKUMEN 1

### Apa perlu ada:

- Search bar (atas)
- Filter (sebelah kiri / dropdown)
- Table list
## - Button: “+ Daftar Perjanjian”

## ---

## ### Table Column:

## | Field | Example |
## |------|--------|
| Agreement ID | CA-2026-001 |
## | Nama Perjanjian | Perjanjian Kilang Jaya |
## | Majikan | Kilang Automotif Jaya |
## | Kesatuan | Kesatuan Pekerja Kilang |
## | Tarikh Mula | 01/01/2026 |
## | Tarikh Tamat | 31/12/2028 |
## | Status | Aktif |
## | Action | View |

## ---

## ### Sample Data

## ```json
## [
## {
"agreement_id": "CA-2026-001",
"title": "Perjanjian Kolektif Kilang Jaya",

## DOKUMEN 1
"employer": "Kilang Automotif Jaya Sdn Bhd",
"union": "Kesatuan Pekerja Kilang Jaya",
## "start_date": "2026-01-01",
## "end_date": "2028-12-31",
"status": "Aktif"
## },
## {
"agreement_id": "CA-2025-010",
"title": "Perjanjian Logistik Delta",
"employer": "Delta Freight Malaysia",
"union": "Kesatuan Logistik",
## "start_date": "2025-03-01",
## "end_date": "2027-02-28",
"status": "Dalam Semakan"
## }
## ]
## ```

## ---

### Filter yang perlu ada:

## - Tahun
- Status (Aktif / Tamat / Dalam Semakan)
## - Nama Majikan
## - Nama Kesatuan

## ---

## ## ✅ SCREEN 2 – DAFTAR PERJANJIAN BARU

### Apa perlu ada:

## DOKUMEN 1

Form simple:

## ```
## - Nama Perjanjian
## - Nama Majikan
## - Nama Kesatuan
## - Tarikh Mula
## - Tarikh Tamat
## - Status
- Upload Dokumen (PDF)
## ```

## ---

## ### Sample Data

## ```json
## {
"agreement_title": "Perjanjian Kolektif Kilang Jaya",
"employer": "Kilang Automotif Jaya Sdn Bhd",
"union": "Kesatuan Pekerja Kilang Jaya",
## "start_date": "2026-01-01",
## "end_date": "2028-12-31",
"status": "Aktif",
"document": "CA_JAYA_2026.pdf"
## }
## ```

## ---

## ## ✅ SCREEN 3 – DETAIL PERJANJIAN

## DOKUMEN 1

### Apa perlu ada:

## ```
- Semua maklumat perjanjian
## - Status (highlight)
- Download dokumen
## - Button: Edit
## ```

## ---

### UI Layout

## ```
## Header:
## - Nama Perjanjian
## - Status Badge

## Content:
## - Employer
## - Union
## - Start Date
## - End Date

## Document:
## - View / Download
## ```

## ---

## ### Sample Data

## DOKUMEN 1

## ```json
## {
"agreement_id": "CA-2026-001",
"title": "Perjanjian Kolektif Kilang Jaya",
"status": "Aktif",
"employer": "Kilang Automotif Jaya",
"union": "Kesatuan Pekerja Kilang",
## "start_date": "2026-01-01",
## "end_date": "2028-12-31",
"document_url": "/docs/CA_JAYA.pdf"
## }
## ```

## ---

## ## ✅ SCREEN 4 – EDIT PERJANJIAN

### Sama macam form tambah, tapi:
- pre-filled data
- boleh update status / tarikh / dokumen

## ---

## ## ✅ SCREEN 5 – SEARCH RESULT (OPTIONAL)

 boleh reuse screen 1 (filtered result)

## ---

## #  5. STATUS FLOW (MUDAH)


## DOKUMEN 1
## ```
## Dalam Semakan → Aktif → Tamat
## ```

## ---

## # ⚙ 6. ACTION BY ROLE

## CA Unit / Pegawai
- Tambah perjanjian
- Edit perjanjian
- Upload dokumen
- Update status

## User lain
- View sahaja

## ---

## #  7. DESIGN STYLE

- Simple table + form
- Clean government UI
- Status guna color:
## - Hijau = Aktif
## - Kuning = Dalam Semakan
## - Merah = Tamat

## ---

## #  8. ANTIGRAVITY PROMPT


## DOKUMEN 1
## ```
Design a government system to manage collective agreements with:

- Table list view
- Search and filter
- Form to create agreement
- Detail view with document
- Clean UI
- Simple layout
## ```

## ---

## #  9. KEY MESSAGE UNTUK TEAM UI/UX

 Ini bukan complex system

##  Fokus:
- list
- form
- detail

 Jangan overdesign

##  Priority:
**clear + mudah guna + structured**



## None
## DOKUMEN 1
## M3 - Pengurusan Notis

## #  UI/UX BRIEF – MODUL PENGURUSAN NOTIS (M3)
### eMP v2.0 – SIMPLE VERSION FOR UI/UX TEAM

## ---

## #  1. APA MODUL NI BUAT (MUDAH FAHAM)

Modul ini untuk:
- create notis / announcement rasmi mahkamah
- paparkan notis kepada pengguna (portal / dashboard)
- urus status notis (aktif / tidak aktif)

 Contoh notis:
- “Mahkamah ditutup pada 1 Mei”
- “Perubahan jadual prosiding”
- “Pengumuman rasmi”

## ---

## #  2. SIAPA GUNA

## ## Internal (utama)
## - Admin
## - Pegawai Mahkamah

## ## External
- Semua pengguna (view sahaja)

## DOKUMEN 1

## ---

## # 吝 3. USER JOURNEY (MUDAH)

## Internal (Admin)

## ```
## Login
## ↓
## Masuk Modul Notis
## ↓
Klik "Tambah Notis"
## ↓
Isi maklumat
## ↓
## Publish
## ↓
Notis muncul di portal
## ```

## ## External User

## ```
## Masuk Portal
## ↓
## Nampak Notis
## ↓
Klik notis
## ↓
Baca detail
## ```

## DOKUMEN 1

## ---

## # 里 4. SCREEN YANG PERLU ADA

## ## ✅ SCREEN 1 – SENARAI NOTIS

### Apa perlu ada:

- button: "+ Tambah Notis"
- search bar
- filter
- table list

## ---

### Column dalam table:

## | Field | Example |
## |------|--------|
## | Tajuk Notis | Penutupan Mahkamah |
## | Kategori | Umum |
## | Tarikh | 01/05/2026 |
## | Status | Aktif |
## | Action | Edit |

## ---

## ### Sample Data

## ```json
## [

## DOKUMEN 1
## {
"title": "Penutupan Mahkamah Sempena Hari Pekerja",
"category": "Umum",
## "date": "2026-05-01",
"status": "Aktif"
## },
## {
"title": "Perubahan Jadual Sebutan Kes",
"category": "Kes",
## "date": "2026-04-15",
"status": "Aktif"
## },
## {
"title": "Notis Lama",
"category": "Umum",
## "date": "2025-12-01",
"status": "Tidak Aktif"
## }
## ]
## ```

## ---

### Filter yang perlu ada:

- Status (Aktif / Tidak Aktif)
## - Kategori
## - Tarikh

## ---

## ## ✅ SCREEN 2 – TAMBAH / EDIT NOTIS

## DOKUMEN 1

### Field dalam form:

## ```
## - Tajuk Notis
## - Kategori (dropdown)
## - Kandungan Notis (textarea)
## - Tarikh Paparan
## - Tarikh Tamat (optional)
- Status (Aktif / Tidak Aktif)
## ```

## ---

## ### Sample Data

## ```json
## {
"title": "Penutupan Mahkamah Sempena Hari Raya",
"category": "Umum",
"content": "Mahkamah akan ditutup dari 10 hingga 14 April 2026.",
## "start_date": "2026-04-10",
## "end_date": "2026-04-14",
"status": "Aktif"
## }
## ```

## ---

## ### Button:

## - Simpan

## DOKUMEN 1
## - Publish
## - Batal

## ---

## ## ✅ SCREEN 3 – PAPARAN NOTIS (USER VIEW)

### Apa perlu ada:

## ```
- Senarai notis (card / list)
## - Tajuk
## - Tarikh
## - Ringkasan
## ```

## ---

## Contoh UI:

## ```
[Penutupan Mahkamah Sempena Hari Raya]
## Tarikh: 10 April 2026
Mahkamah akan ditutup dari 10 hingga 14 April...

[Klik untuk baca lanjut]
## ```

## ---

## ### Sample Data


## DOKUMEN 1
## ```json
## [
## {
"title": "Penutupan Mahkamah Sempena Hari Raya",
## "date": "2026-04-10",
"summary": "Mahkamah akan ditutup dari 10 hingga 14 April..."
## }
## ]
## ```

## ---

## ## ✅ SCREEN 4 – DETAIL NOTIS

### Apa perlu ada:

## ```
## - Tajuk
## - Tarikh
- Kandungan penuh
## ```

## ---

## ### Sample Data

## ```json
## {
"title": "Penutupan Mahkamah Sempena Hari Raya",
## "date": "2026-04-10",
"content": "Mahkamah akan ditutup dari 10 hingga 14 April 2026. Semua prosiding akan ditangguhkan."
## }

## DOKUMEN 1
## ```

## ---

## # ⚙ 5. ACTION BY ROLE

## ## Admin / Pegawai
- Create notis
- Edit notis
- Publish / unpublish

## ## User
- View sahaja

## ---

## #  6. DESIGN GUIDELINE

- Simple list + form
- Clean UI
- Highlight tajuk notis
- Jangan terlalu banyak info
- Mobile friendly

## ---

## #  7. ANTIGRAVITY PROMPT

## ```
Design a government notice management module with:

- notice list table

## DOKUMEN 1
- create/edit form
- public notice display
- clean UI
- simple layout
## ```

## ---

## #  8. KEY MESSAGE UNTUK UI/UX TEAM

 Ini bukan notification system

##  Ini:
**announcement / notice board**

##  Fokus:
- list notis
- form create
- paparan mudah dibaca

 Keep it simple.

