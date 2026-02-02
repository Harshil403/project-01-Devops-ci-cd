# Enterprise DevSecOps CI/CD Pipeline with AWS, Security Gates & Disaster Recovery

## 📌 Project Overview
This project demonstrates an **enterprise-grade DevSecOps CI/CD pipeline** where security is enforced before cloud deployment.  
The pipeline integrates **GitHub Actions security scanning**, triggers **AWS CodePipeline only on successful validation**, and deploys applications to **Amazon EKS** with a **multi-region disaster recovery setup**.

Primary workloads run in **Mumbai (ap-south-1)**, with **Singapore (ap-southeast-1)** configured as a Disaster Recovery (DR) region.

---

## 🏗️ High-Level Architecture

1. Developer pushes code to GitHub
2. GitHub Actions pipeline starts
3. CodeQL performs static security analysis
4. Secrets scanning is enforced
5. Pipeline **fails on security violations**
6. On success, GitHub Actions triggers AWS CodePipeline
7. AWS CodeBuild builds and pushes images to ECR
8. Application is deployed to Amazon EKS
9. Monitoring is enabled for application and database
10. Disaster Recovery is configured in secondary region

---

## 🔁 CI/CD Workflow (DevSecOps)

### Phase 1: GitHub Actions (Security Gate)
- Triggered on every push / pull request
- Performs:
  - Static Application Security Testing (CodeQL)
  - Secrets detection (GitGuardian, Gitleaks)
- **Pipeline stops immediately if security issues are detected**

Only secure and compliant code is allowed to move forward.

---

### Phase 2: AWS CI/CD Pipeline
Triggered **only after successful GitHub Actions security checks**.

#### AWS Services Used
- AWS CodePipeline – Orchestrates deployment
- AWS CodeBuild – Builds Docker images
- Amazon ECR – Secure container registry
- Amazon EKS – Kubernetes deployment platform

---

## 🔐 Security Implementation (Core DevSecOps)

### 1️⃣ Static Application Security Testing (SAST)
- CodeQL integrated into GitHub Actions
- Detects security vulnerabilities early
- Build **fails on high/critical findings**

### 2️⃣ Secrets Detection & Prevention
- GitGuardian integrated into CI pipeline
- Gitleaks used for local/manual scanning
- Prevents credentials, tokens, and secrets from being committed
- Enforced as a **mandatory security gate**

### 3️⃣ Security Gates Enforcement
Security is enforced before AWS deployment:
- ❌ Block pipeline on CodeQL violations
- ❌ Block pipeline on secrets exposure
- ✅ Trigger AWS CodePipeline only on secure builds

This ensures **no vulnerable code reaches AWS infrastructure**.

---

## ☁️ Cloud & Kubernetes Deployment

### Primary Region
- **Mumbai (ap-south-1)**
- Hosts:
  - Amazon EKS cluster
  - Application workloads
  - Primary database and services

### Disaster Recovery Region
- **Singapore (ap-southeast-1)**
- Configured for:
  - Backup workloads
  - Failover readiness
  - Business continuity

---

## 🔄 Disaster Recovery Strategy
- Multi-region deployment strategy
- Secure backups and restore mechanisms
- DR region remains on standby for failover
- Ensures high availability and resilience

---

## 📊 Monitoring & Observability

### Application Monitoring
- Prometheus for metrics collection
- Grafana dashboards for visualization
- Tracks:
  - Pod health
  - Resource usage
  - Application performance

### Database Monitoring
- Percona Monitoring
- Observes:
  - Database health
  - Query performance
  - Connection and resource usage

---

## 🛠️ Tools & Technologies

### DevSecOps & CI/CD
- GitHub Actions
- AWS CodePipeline
- AWS CodeBuild

### Cloud & Containers
- Docker
- Amazon ECR
- Amazon EKS
- Kubernetes

### Security
- CodeQL (SAST)
- GitGuardian (Secrets Detection)
- Gitleaks (Secrets Scanning)

### Monitoring
- Prometheus
- Grafana
- Percona Monitoring

---

## 🎯 Key DevSecOps Highlights
- Shift-left security with enforced CI security gates
- Secure handoff from GitHub Actions to AWS CodePipeline
- Multi-region AWS deployment with DR strategy
- Production-grade monitoring and observability
- Real-world enterprise DevSecOps architecture

---

## 📁 Repository Structure
