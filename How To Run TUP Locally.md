# TACC Public Website & Control Panel

The https://tacc.utexas.edu/ website (circa 2019) is run on Java and Liferay (CMS). It is a very old project, with limited support, and is scheduled to be rebuilt during 2020.

> **Notice:** Development should be limited to necessary changes and should be evaluated against the cost-benefit ratio.

## Architecture

This project has Java-based web services, build automation, and CMS.
- _Liferay **Portal**_ is an open-source enterprise CMS based on J2EE. 
- _Apache **Tomcat**_ provides a Java HTTP web server environment. 
- _Apache **Maven**_ is a build automation tool primarily for Java projects.
- _Apache **Ant**_ is a build automation tool, similar to Make, but for Java.

## Requirements

- MySQL 8.0 \*
- Maven (latest) \*
    - Java SE 8 \*
    - Liferay Portal + Maven †
- Liferay Portal 6.1.20 EE ‡
    - ~~Java SE 7~~ \*§
- Tomcat ‡
- ?
    - `cronolog` \*|
    - Ant (latest) \*|

\* OSX users may install (`mysql`, `maven`, `ant`, `cronolog`) with [Homebrew][dl-homebrew].
<br />
† May be able to use [Liferay Portal Maven 6.1.2 CE (GA3)][dl-liferay-portal].
<br />
‡ No need to install nor build. This is provided during [Development → Setup](#dev-setup).
<br />
§ No need to install. This is avoided by skipping setup of Liferay Portal 6.1.20 EE‡.
<br />
| One of the primary requirements needed this. _If you know which, please update the dependency list and remove this footnote._

## Deployment

### Deploy. Setup

Deployment to production is done via a Virtual Machine.

1. [Request Access to VMs](https://kb.tacc.utexas.edu/index.php/knowledge-base/request-access-to-vm/):
    - `tup-dev.tacc.utexas.edu`
    - `portal.tacc.utexas.edu`
    
    _Request approval from `jchuah`\*._

1. …

\* Or whoever is guiding you through this.

### Deploy. Actions

1. …

## Development

### Dev. Setup

1. Copy pre-built Liferay directory from coworker.\*
    - The directory should have these telltale directories:
        - `deploy/`:<br />
            You will copy Maven-compiled `*.war` files into here, which will be automatically deployed and removed by the Liferay/Tomcat/Bootstrap† service.
        - `logs/`<br />
            You may find build and access logs here.
        - `tomcat-7.0.27/`<br />
            This provides Apache Tomcat‡.
1. If archived, extract the "Liferay Portal + Maven"‡ archive.
1. Clone the [`tacc-user-portal` repo][repo-tup].
1. Inside the cloned repo, install the submodules.
    1. `cd tacc-user-portal`
    1. `git submodule init`
    1. `git submodule install`

\* This is a shortcut that should reduce setup time drastically.
<br />
† I forget which. _If you know which, please update the note and remove this footnote._
<br />
‡ See [Requirements](#requirements).

### Dev. Usage

1. Start MySQL:
    - `brew services mysql start`

1. Make desired changes to code…
    - i.e. edit files in `tacc-user-portal/maven`.

1. Package website (skip tests) into `*.war` artifact:
    1. `cd [__WHERE_DO_I_GO__]`
    1. `mvn package -DskipTests=true`

1. Start Liferay/Tomcat/Bootstrap\* service(?):
    - `???`

    _Afterward, web browser should automatically be opened to http://localhost:8080._

1. Open website at `http://localhost:8080/web/website`.
    - If this is wrong, check: _[Control Panel][ws-control-panel] → [Website ▾] → Site Settings → Basic Information → Site URL → Friendly URL_

1. Copy the artifact into the `deploy/` directory.

    (The one inside the pre-built Liferay directory from coworker.)

    _Afterward, the Liferay/Tomcat/Bootstrap\* service will automatically deploy the artifact and remove it from the directory._

1. Check `logs/` to ensure deploy was successful.

    (The latest one inside the pre-built Liferay directory from coworker.)

1. Hard refresh the [website][ws-public-website] to check your work.

\* I forget which. _If you know which, please update the note and remove this footnote._

### Dev. Teardown

1. Kill the Liferay (`Bootstrap`) process:
    1. `jps`
    2. `kill -9 [bootstrap_process_id]`

    _The `Bootstrap` service will "chew up battery"._

## Tips & Tricks

### Switch Between Java Versions

> **Notice:** This is only helpful for "the long way" to setup a development environment, which is **not** documented.

Java SE 7 is required to build Liferay. To easily switch between them, use this in your `~/.bash_profile`:

```bash
# Java
# ===
# TACC Portal needs a version of Java for LifeRay and for Maven.
export JAVA_HOME="$(/usr/libexec/java_home -v 1.7)"
# export JAVA_HOME="$(/usr/libexec/java_home -v 1.8)"
export JRE_HOME="$JAVA_HOME/jre"
```



[dl-homebrew]: https://brew.sh/ "Homebrew: Package Manager for OSX"
[dl-liferay-portal]: https://sourceforge.net/projects/lportal/files/Liferay%20Portal/ "SourceForge: Liferay Portal"

[ws-public-website]: http://localhost:8080/web "TACC User Portal: Control Panel"
[ws-control-panel]: http://localhost:8080/group/control_panel "TACC User Portal: Control Panel"

[repo-tup]: https://bitbucket.org/taccaci/tacc-user-portal/ "TUP project: TACC User Portal repo"