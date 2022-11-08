import { Button, Spinner } from "@fitzzz/core";
import React from "react";

export default function Web() {
  return (
    <>
      {/* Buttons */}
      <div className="flex flex-col">
        <h1>Buttons</h1>
        <div className="mb-2 inline-flex flex-wrap gap-2">
          <Button variant={"default"}>Default</Button>
          <Button variant={"primary"}>Primary</Button>
          <Button variant={"secondary"}>Secondary</Button>
          <Button variant={"info"}>Info</Button>
          <Button variant={"success"}>Success</Button>
          <Button variant={"warning"}>Warning</Button>
          <Button variant={"error"}>Error</Button>
        </div>
        <div className="mb-2 inline-flex flex-wrap gap-2">
          <Button variant={"default"} rounded>
            Default
          </Button>
          <Button variant={"primary"} rounded>
            Primary
          </Button>
          <Button variant={"secondary"} rounded>
            Secondary
          </Button>
          <Button variant={"info"} rounded>
            Info
          </Button>
          <Button variant={"success"} rounded>
            Success
          </Button>
          <Button variant={"warning"} rounded>
            Warning
          </Button>
          <Button variant={"error"} rounded>
            Error
          </Button>
        </div>
        <div className="mb-2 inline-flex flex-wrap gap-2">
          <Button variant={"default"} outlined>
            Default
          </Button>
          <Button variant={"primary"} outlined>
            Primary
          </Button>
          <Button variant={"secondary"} outlined>
            Secondary
          </Button>
          <Button variant={"info"} outlined>
            Info
          </Button>
          <Button variant={"success"} outlined>
            Success
          </Button>
          <Button variant={"warning"} outlined>
            Warning
          </Button>
          <Button variant={"error"} outlined>
            Error
          </Button>
        </div>
      </div>

      {/* Spinners */}
      <div className="flex flex-col">
        <h1>Spinners</h1>
        <div className="mb-2 inline-flex flex-wrap gap-2">
          <Spinner variant={"default"} />
          <Spinner variant={"primary"} />
          <Spinner variant={"secondary"} />
          <Spinner variant={"info"} />
          <Spinner variant={"success"} />
          <Spinner variant={"warning"} />
          <Spinner variant={"error"} />
        </div>

        <div className="mb-2 inline-flex flex-wrap gap-2">
          <Spinner soft variant={"default"} />
          <Spinner soft variant={"primary"} />
          <Spinner soft variant={"secondary"} />
          <Spinner soft variant={"info"} />
          <Spinner soft variant={"success"} />
          <Spinner soft variant={"warning"} />
          <Spinner soft variant={"error"} />
        </div>

        <div className="mb-2 inline-flex flex-wrap gap-2">
          <Spinner type={"svg"} variant={"default"} />
          <Spinner type={"svg"} variant={"primary"} />
          <Spinner type={"svg"} variant={"secondary"} />
          <Spinner type={"svg"} variant={"info"} />
          <Spinner type={"svg"} variant={"success"} />
          <Spinner type={"svg"} variant={"warning"} />
          <Spinner type={"svg"} variant={"error"} />
        </div>

        <div className="mb-2 inline-flex flex-wrap items-center gap-2">
          <Spinner type={"svg"} variant={"primary"} size="xs" />
          <Spinner type={"svg"} variant={"primary"} size="sm" />
          <Spinner type={"svg"} variant={"primary"} size="md" />
          <Spinner type={"svg"} variant={"primary"} size="lg" />
          <Spinner type={"svg"} variant={"primary"} size="xl" />
          <Spinner type={"svg"} variant={"primary"} size="xl-1" />
        </div>
      </div>
    </>
  );
}
